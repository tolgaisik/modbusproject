from datetime import datetime, date
import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from src.config import DevelopmentConfig, ProductionConfig
from src.modbus import ModbusManager
from src.models import (
    ModbusRegisterValue,
    ModbusRegisterValueSchema,
    TotalEnergyProductionPerDay,
    TotalEnergyProductionPerDaySchema,
    AveragePowerPerHour,
    AveragePowerPerHourSchema,
    AverageCurrentValuePerHour,
    AverageCurrentValuePerHourSchema,
    AverageVoltageValuePerHour,
    AverageVoltageValuePerHourSchema,
    db,
)
from src.tasks import scheduler
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


def create_app():
    application = Flask(__name__)
    CORS(application)
    uri = os.getenv("DATABASE_URL")
    if application.config.get("ENV") == "production":
        application.config.from_object(ProductionConfig())
        if uri and uri.startswith("postgres://"):
            uri = uri.replace("postgres://", "postgresql://", 1)
            application.config["SQLALCHEMY_DATABASE_URI"] = uri
    else:
        application.config.from_object(DevelopmentConfig())
    application.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    if not application.debug or os.environ.get("WERKZEUG_RUN_MAIN") == "true":
        scheduler.init_app(application)
    return application


app = create_app()
db.init_app(app)
scheduler.start()


@app.route("/test", methods=["GET"])
def test():
    return "test"


@app.route("/createdevice", methods=["GET", "POST"])
def create_device():
    device = request.data

    pass


@app.route("/api", methods=["GET"])
def read_table_content():
    with app.app_context():
        print(app.url_map)
        query_result = (
            db.session.query(ModbusRegisterValue)
            .order_by(ModbusRegisterValue.id.desc())
            .limit(1)
        )
        schema = ModbusRegisterValueSchema(many=True)
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/current_day", methods=["GET"])
def get_average_current_value_per_hour_week():
    with app.app_context():
        now = datetime.now()
        this_week = date(now.year, now.month, now.day - now.weekday())
        query_result = db.session.query(AverageCurrentValuePerHour).filter(
            AverageCurrentValuePerHour.generated_at > this_week
        )
        schema = AverageCurrentValuePerHourSchema(many=True)
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/current_month", methods=["GET"])
def get_average_current_value_per_hour_month():
    with app.app_context():
        now = datetime.now()
        this_month = date(now.year, now.month, 1)
        query_result = db.session.query(AverageCurrentValuePerHour).filter(
            AverageCurrentValuePerHour.generated_at > this_month
        )
        schema = AverageCurrentValuePerHourSchema(many=True)
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/voltage_day", methods=["GET"])
def get_average_voltage_value_per_hour_day():
    with app.app_context():
        now = datetime.now()
        today = date(now.year, now.month, now.day)
        query_result = db.session.query(AverageVoltageValuePerHour).filter(
            AverageVoltageValuePerHour.generated_at > today
        )
        schema = AverageVoltageValuePerHourSchema(many=True)
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/voltage_week", methods=["GET"])
def get_average_voltage_value_per_hour_week():
    now = datetime.now()
    this_week = date(now.year, now.month, now.day - now.weekday())
    with app.app_context():
        query_result = db.session.query(AverageVoltageValuePerHour).filter(
            AverageVoltageValuePerHour.generated_at > this_week
        )
        schema = AverageVoltageValuePerHourSchema(many=True)
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/voltage_month", methods=["GET"])
def get_average_voltage_value_per_hour_month():
    now = datetime.now()
    this_month = date(now.year, now.month, 1)
    print(this_month)
    with app.app_context():
        query_result = db.session.query(AverageVoltageValuePerHour).filter(
            AverageVoltageValuePerHour.generated_at > this_month
        )
        schema = AverageCurrentValuePerHourSchema(many=True)
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/power_day", methods=["GET"])
def get_average_power_value_per_hour():
    with app.app_context():
        now = datetime.now()
        today = date(now.year, now.month, now.day)
        query_result = db.session.query(AveragePowerPerHour).filter(
            AveragePowerPerHour.generated_at > today
        )
        schema = AveragePowerPerHourSchema(many=True)
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/energy_day", methods=["GET"])
def get_total_energy_production():
    with app.app_context():
        now = datetime.now()
        today = date(now.year, now.month, now.day)
        query_result = db.session.query(TotalEnergyProductionPerDay).filter(
            TotalEnergyProductionPerDay.generated_at > today
        )
        schema = TotalEnergyProductionPerDaySchema()
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/energy_week", methods=["GET"])
def get_total_energy_production_week():
    with app.app_context():
        now = datetime.now()
        this_week = date(now.year, now.month, now.day - now.weekday())
        query_result = db.session.query(TotalEnergyProductionPerDay).filter(
            TotalEnergyProductionPerDay.generated_at > this_week
        )
        schema = TotalEnergyProductionPerDaySchema()
        result = schema.dump(query_result)
        return jsonify(result)


@app.route("/api/energy_month", methods=["GET"])
def get_total_energy_production_month():
    with app.app_context():
        now = datetime.now()
        this_month = date(now.year, now.month, 1)
        query_result = db.session.query(TotalEnergyProductionPerDay).filter(
            TotalEnergyProductionPerDay.generated_at > this_month
        )
        schema = TotalEnergyProductionPerDaySchema()
        result = schema.dump(query_result)
        return jsonify(result)


if __name__ == "__main__":
    app.run(debug=False, use_reloader=False)
