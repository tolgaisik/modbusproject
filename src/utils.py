import json
import os
from datetime import date, datetime


class Utils:
    def __init__(self):
        pass

    def get_registers(self):
        with open(os.path.join(os.path.dirname(__file__), "register.json")) as file:
            registers = json.load(file)
            return registers
        return None

    def change_time_format(self, time_string):
        temp_time = datetime.fromisoformat(time_string)
        return temp_time.strftime("%d %b %y, %H:%M:%S")

    def split_register_adresses(self, modbus_device):
        retval = {}
        for key, val in modbus_device.items():
            if (
                key != "updated_at"
                and key != "created_at"
                and key != "name"
                and key != "IP"
                and key != "status"
                and key != "id"
            ):
                retval[key] = val
        return retval


if __name__ == "__main__":
    print(Utils().change_time_format("2021-07-31T22:15:39"))
