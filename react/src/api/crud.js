import axios from "axios";

export function createNewModbusDevice(modbusDevice) {
	Object.keys(modbusDevice).forEach((key) => {
		if (
			key !== "name" &&
			key !== "IP" &&
			key !== "showRed" &&
			key !== "showSuccess"
		)
			modbusDevice[key] = parseInt(modbusDevice[key]);
	});
	return axios.post("/api/create_device", modbusDevice);
}
export function updateModbusDevice(modbusDevice) {}
export function deleteModbusDevice(modbusDeviceId) {
	return axios.delete("/api/delete_device", {
		modbusDeviceId: modbusDeviceId,
	});
}
