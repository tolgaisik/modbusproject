import json
import os


class Utils:
    def __init__(self):
        pass

    def get_registers(self):
        with open(os.path.join(os.path.dirname(__file__), "register.json")) as file:
            registers = json.load(file)
            return registers
