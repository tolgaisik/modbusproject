import json
import os
from datetime import datetime, timedelta
import time
from src.modbus import ModbusManager
from flask_apscheduler import APScheduler
from src.models import (
    ModbusDevice,
    ModbusDeviceSchema,
    ModbusRegisterValue,
    ModbusRegisterValueSchema,
    TotalEnergyProductionPerDay,
    AveragePowerPerHour,
    AveragePowerPerHourSchema,
    AverageVoltageValuePerHour,
    AverageVoltageValuePerHourSchema,
    AverageCurrentValuePerHour,
    AverageCurrentValuePerHourSchema,
)
from src.utils import Utils
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()
scheduler = APScheduler()


@scheduler.task("interval", id="modbus_recorder", max_instances=2, seconds=20)
def read_registers_from_modbus():
    with scheduler.app.app_context():
        query_result = db.session.query(ModbusDevice).all()
        schema = ModbusDeviceSchema(many=True)
        result = schema.dump(query_result)
        if len(result) == 0:
            return
        for modbus_device in result:
            manager = ModbusManager(modbus_device["IP"])
            register_adress = Utils().split_register_adresses(modbus_device)
            response = manager.get_holding_registers(register_adress)
            if response is None:
                return
            response["device_id"] = modbus_device["id"]
            response["generated_at"] = datetime.now()
            obj = ModbusRegisterValue(response)
            db.session.add(obj)
            db.session.commit()


@scheduler.task("cron", max_instances=2, hour="*")
def save_average_per_hour():
    save_average_voltage_value_per_hour()
    save_average_current_value_per_hour()
    save_average_power_value_per_hour()


@scheduler.task("cron", max_instances=2, hour="22")
def save_total_power_generation_day():
    one_hour_ago = datetime.now() - timedelta(hours=24)
    schema = AveragePowerPerHourSchema(many=True)
    with scheduler.app.app_context():
        query_result = db.session.query(
            AveragePowerPerHour.id,
            AveragePowerPerHour.production,
            AveragePowerPerHour.generated_at,
        ).filter(AveragePowerPerHour.generated_at > one_hour_ago)
        retval = schema.dump(query_result)
        total_power = 0
        if len(retval) > 0:
            for item in retval:
                total_power += item["production"]
        result = TotalEnergyProductionPerDay(
            production=total_power, generated_at=datetime.now()
        )
        db.session.add(result)
        try:
            db.session.commit()
        except:
            db.session.rollback()


def save_average_voltage_value_per_hour():
    one_hour_ago = datetime.now() - timedelta(hours=1)
    schema = AverageVoltageValuePerHourSchema(many=True)
    with scheduler.app.app_context():
        query_result = db.session.query(
            ModbusRegisterValue.VAB,
            ModbusRegisterValue.VAC,
            ModbusRegisterValue.VAN,
            ModbusRegisterValue.VBC,
            ModbusRegisterValue.VBN,
            ModbusRegisterValue.VCN,
        ).filter(ModbusRegisterValue.generated_at > one_hour_ago)
        retval = schema.dump(query_result)
        average_voltage = [0 for x in range(0, 6)]
        counter = 0
        for item in retval:
            if item is not None:
                average_voltage[0] += item["VAB"]
                average_voltage[1] += item["VAC"]
                average_voltage[2] += item["VAN"]
                average_voltage[3] += item["VBC"]
                average_voltage[4] += item["VBN"]
                average_voltage[5] += item["VCN"]
                counter += 1
        if counter != 0:
            average_voltage[0] = average_voltage[0] / counter
            average_voltage[1] = average_voltage[1] / counter
            average_voltage[2] = average_voltage[2] / counter
            average_voltage[3] = average_voltage[3] / counter
            average_voltage[4] = average_voltage[4] / counter
            average_voltage[5] = average_voltage[5] / counter
        model_instance = AverageVoltageValuePerHour(
            VAB=average_voltage[0],
            VAC=average_voltage[1],
            VAN=average_voltage[2],
            VBC=average_voltage[3],
            VBN=average_voltage[4],
            VCN=average_voltage[5],
            generated_at=datetime.now(),
        )
        db.session.add(model_instance)
        try:
            db.session.commit()
        except:
            db.session.rollback()


def save_average_current_value_per_hour():
    one_hour_ago = datetime.now() - timedelta(hours=1)
    schema = AverageCurrentValuePerHourSchema(many=True)
    with scheduler.app.app_context():
        query_result = db.session.query(
            ModbusRegisterValue.IA, ModbusRegisterValue.IB, ModbusRegisterValue.IC
        ).filter(ModbusRegisterValue.generated_at > one_hour_ago)
        retval = schema.dump(query_result)
        average_current = [0 for x in range(0, 3)]
        counter = 0
        for item in retval:
            if item:
                average_current[0] += item["IA"]
                average_current[1] += item["IB"]
                average_current[2] += item["IC"]
                counter += 1
        if counter != 0:
            average_current[0] = average_current[0] / counter
            average_current[1] = average_current[1] / counter
            average_current[2] = average_current[2] / counter
        model_instance = AverageCurrentValuePerHour(
            IA=average_current[0],
            IB=average_current[1],
            IC=average_current[2],
            generated_at=datetime.now(),
        )
        db.session.add(model_instance)
        try:
            db.session.commit()
        except:
            db.session.rollback()


def save_average_power_value_per_hour():
    one_hour_ago = datetime.now() - timedelta(hours=1)
    schema = ModbusRegisterValueSchema(many=True)
    with scheduler.app.app_context():
        query_result = db.session.query(ModbusRegisterValue.P).filter(
            ModbusRegisterValue.generated_at > one_hour_ago
        )
        retval = schema.dump(query_result)
        average_power = 0
        counter = 0
        for item in retval:
            if item["P"]:
                counter += 1
                average_power += item["P"]
        if counter != 0:
            average_power = average_power / counter
        model_instance = AveragePowerPerHour(
            production=average_power, generated_at=datetime.now()
        )
        db.session.add(model_instance)
        try:
            db.session.commit()
        except:
            db.session.rollback()
