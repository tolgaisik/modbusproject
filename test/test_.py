from app import app, db, create_app
from src.config import TestingConfig
from datetime import datetime
import os
import tempfile
import pytest
from src.modbus import ModbusManager
from src.utils import Utils


@pytest.fixture
def client():
    db_fd, app.config["DATABASE"] = tempfile.mkstemp()
    app.config.from_object(TestingConfig())
    with app.test_client() as client:
        yield client
    os.close(db_fd)
    os.unlink(app.config["DATABASE"])


def test_modbus():
    mm = ModbusManager("217.31.242.197")
    response = mm.get_holding_registers(Utils().get_registers())
    assert response


def test_route(client):
    response = client.get("/test")
    assert response.data == b"test"


def test_route_current1(client):
    response = client.get("/current_day")
    assert response.data


def test_route_current2(client):
    response = client.get("/current_week")
    assert response.data


def test_route_current3(client):
    response = client.get("/current_month")
    assert response.data


def test_route_voltage1(client):
    response = client.get("/voltage_day")
    assert response.data


def test_route_voltage2(client):
    response = client.get("/voltage_week")
    assert response.data


def test_route_voltage3(client):
    response = client.get("/voltage_month")
    assert response.data


def test_route_power(client):
    response = client.get("/power_day")
    assert response.data


def test_route_energy1(client):
    response = client.get("/energy_day")
    assert response.data


def test_route_energy2(client):
    response = client.get("/energy_week")
    assert response.data


def test_route_energy3(client):
    response = client.get("/energy_month")
    assert response.data
