from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    role = db.Column(db.Integer)
    group_id = db.Column(db.Integer)


class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "email", "password", "role", "group_id")


class ModbusDevice(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String, nullable=False)
    status = db.Column(db.Integer)
    IP = db.Column(db.String, nullable=False)
    F = db.Column(db.Integer)
    IA = db.Column(db.Integer)
    IB = db.Column(db.Integer)
    IC = db.Column(db.Integer)
    P = db.Column(db.Integer)
    PF = db.Column(db.Integer)
    Q = db.Column(db.Integer)
    SS = db.Column(db.Integer)
    VAB = db.Column(db.Integer)
    VAC = db.Column(db.Integer)
    VAN = db.Column(db.Integer)
    VBC = db.Column(db.Integer)
    VBN = db.Column(db.Integer)
    VCN = db.Column(db.Integer)
    WPNEG = db.Column(db.Integer)
    WPPOS = db.Column(db.Integer)
    WQPOS = db.Column(db.Integer)
    WQNEG = db.Column(db.Integer)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    register_value = db.relationship(
        "ModbusRegisterValue", backref="modbus_device", lazy=True
    )

    def __init__(self, my_dict):
        for key in my_dict:
            setattr(self, key, my_dict[key])

    def __repr__(self):
        return "id: " + str(self.id) + " f : " + str(self.F) + " ia: " + str(self.IA)


class ModbusDeviceSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "name",
            "status",
            "IP",
            "F",
            "IA",
            "IB",
            "IC",
            "P",
            "PF",
            "Q",
            "SS",
            "VAB",
            "VAC",
            "VAN",
            "VBC",
            "VBN",
            "VCN",
            "WPNEG",
            "WPPOS",
            "WQPOS",
            "WQNEG",
            "created_at",
            "updated_at",
        )


class ModbusRegisterValue(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    device_id = db.Column(db.Integer, db.ForeignKey("modbus_device.id"), nullable=False)
    F = db.Column(db.Integer)
    IA = db.Column(db.Integer)
    IB = db.Column(db.Integer)
    IC = db.Column(db.Integer)
    P = db.Column(db.Integer)
    PF = db.Column(db.Integer)
    Q = db.Column(db.Integer)
    SS = db.Column(db.Integer)
    VAB = db.Column(db.Integer)
    VAC = db.Column(db.Integer)
    VAN = db.Column(db.Integer)
    VBC = db.Column(db.Integer)
    VBN = db.Column(db.Integer)
    VCN = db.Column(db.Integer)
    WPNEG = db.Column(db.Integer)
    WPPOS = db.Column(db.Integer)
    WQPOS = db.Column(db.Integer)
    WQNEG = db.Column(db.Integer)
    generated_at = db.Column(db.DateTime)

    def __init__(self, my_dict):
        for key in my_dict:
            setattr(self, key, my_dict[key])

    def __repr__(self):
        return "id: " + str(self.id) + " f : " + str(self.F) + " ia: " + str(self.IA)


class ModbusRegisterValueSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "F",
            "IA",
            "IB",
            "IC",
            "P",
            "PF",
            "Q",
            "SS",
            "VAB",
            "VAC",
            "VAN",
            "VBC",
            "VBN",
            "VCN",
            "WPNEG",
            "WPPOS",
            "WQPOS",
            "WQNEG",
            "generated_at",
        )


class AveragePowerPerHour(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    production = db.Column(db.Float)
    generated_at = db.Column(db.DateTime)

    def __init__(self, my_dict):
        for key in my_dict:
            setattr(self, key, my_dict[key])

    def __init__(self, production, generated_at):
        self.production = production
        self.generated_at = generated_at


class AveragePowerPerHourSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "production",
            "generated_at",
        )


class TotalEnergyProductionPerDay(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    production = db.Column(db.Float)
    generated_at = db.Column(db.DateTime)

    def __init__(self, my_dict):
        for key in my_dict:
            setattr(self, key, my_dict[key])

    def __init__(self, production, generated_at):
        self.production = production
        self.generated_at = generated_at


class TotalEnergyProductionPerDaySchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "production",
            "generated_at",
        )


class AverageCurrentValuePerHour(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    IA = db.Column(db.Float)
    IB = db.Column(db.Float)
    IC = db.Column(db.Float)
    generated_at = db.Column(db.DateTime)

    def __init__(self, my_dict):
        for key in my_dict:
            setattr(self, key, my_dict[key])

    def __init__(self, IA, IB, IC, generated_at):
        self.IA = IA
        self.IB = IB
        self.IC = IC
        self.generated_at = generated_at


class AverageCurrentValuePerHourSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "IA",
            "IB",
            "IC",
            "generated_at",
        )


class AverageVoltageValuePerHour(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    VAB = db.Column(db.Float)
    VAC = db.Column(db.Float)
    VAN = db.Column(db.Float)
    VBC = db.Column(db.Float)
    VBN = db.Column(db.Float)
    VCN = db.Column(db.Float)
    generated_at = db.Column(db.DateTime)

    def __init__(self, my_dict):
        for key in my_dict:
            setattr(self, key, my_dict[key])

    def __init__(self, VAB, VAC, VAN, VBC, VBN, VCN, generated_at):
        self.VAB = VAB
        self.VAC = VAC
        self.VAN = VAN
        self.VBC = VBC
        self.VBN = VBN
        self.VCN = VCN
        self.generated_at = generated_at


class AverageVoltageValuePerHourSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "VAB",
            "VAC",
            "VAN",
            "VBC",
            "VBN",
            "VCN",
            "generated_at",
        )
