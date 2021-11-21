import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from './employeesSlice'
import birthdayReducer from "./birthdaySlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
    birthday: birthdayReducer,
  },
});
