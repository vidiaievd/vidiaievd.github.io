import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice'
import birthdayReducer from './birthdaySlice';
import sittingReducer from './sittingSlice';

export default configureStore({
  reducer: {
    employees: employeesReducer,
    birthday: birthdayReducer,
    sitting: sittingReducer,
  },
});
