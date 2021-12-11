import { combineReducers } from '@reduxjs/toolkit';
import employees from './employeesSlice'
import birthday from './birthdaySlice';
import sitting from './sittingSlice';

const reducer = combineReducers({
  employees,
  birthday,
  sitting,
});

export default reducer;
