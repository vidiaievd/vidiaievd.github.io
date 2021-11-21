export const employeesByAlphabet = (employeesArray = []) => {
	let _arr = [];
	for (let employees of employeesArray) {
		let keys = employees.firstName[0];
		if (!_arr[keys]) {
			_arr[keys] = [];
		}
		_arr[keys].push(employees);
	}
	return _arr;
};