from pyModbusTCP.client import ModbusClient
from src.utils import Utils
import json
import os

HOST = "217.31.242.197"
PORT = 502
UNIT_ID = 1


class ModbusManager(ModbusClient):
    def __init__(self, ip):
        try:
            super().__init__(ip, PORT, auto_open=True, auto_close=True)
        except Exception:
            raise Exception("ModbusManager can not be created.")

    def get_holding_registers(self, holding_registers):
        retval = 0
        register_list = {}
        self.unit_id(UNIT_ID)
        number_of_registers = 1
        if self.open():
            for register in holding_registers:
                response = self.read_holding_registers(
                    holding_registers[register]["registerAddress"], number_of_registers
                )
                if response == None or len(response) == 0:
                    return None
                retval = response[0]
                if retval > 32256:
                    retval = retval - 65536
                register_list[register] = retval
        self.close()
        return register_list

    def write_holding_registers(self):
        pass

    def read_single_register(self, register):
        pass


if __name__ == "__main__":
    mm = ModbusManager(HOST)
    print(mm.get_holding_registers(Utils().get_registers()))
