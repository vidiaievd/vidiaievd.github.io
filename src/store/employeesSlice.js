import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getEmployees = createAsyncThunk(
    "employees/getEmployees",
    async () => {
        const response = await axios.get(
            "https://yalantis-react-school-api.yalantis.com/api/task0/users"
        );
        if (response.status === 200) {
            return response.data;
        }
        return new Error("Error");
    }
);

const employeesAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.lastName > b.lastName ? 1 : -1),
});

export const { selectAll: selectEmployees, selectById: selectEmployeeById } =
    employeesAdapter.getSelectors((state) => state.employees);

const getEmployeesSlice = createSlice({
    name: "employees",
    initialState: employeesAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [getEmployees.fulfilled]: employeesAdapter.setAll,
    },
});

export default getEmployeesSlice.reducer;
