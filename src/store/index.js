import { combineReducers } from '@reduxjs/toolkit';
import employees from "../usersList/store/EmployeesSlice";
import birthday from "../usersList/store/BirthdaySlice";

const reducer = combineReducers({
  employees,
  birthday,
});

export default reducer;
