import axios from "axios";
import { mutate } from "swr";

export function createNewModbusDevice(modbusDevice) {
	Object.keys(modbusDevice).forEach((key) => {
		if (key !== "name" && key !== "IP")
			modbusDevice[key] = parseInt(modbusDevice[key]);
	});
	axios
		.post("/api/create_device", modbusDevice)
		.then(function (response) {
			mutate("/api/device");
		})
		.catch(function () {});
}
export function updateModbusDevice(modbusDevice) {}
