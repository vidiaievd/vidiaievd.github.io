import { createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
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
    sortComparer: (a, b) => (a.firstName > b.firstName ? 1 : -1),
});

export const { selectAll: selectEmployees, selectById: selectEmployeeById } =
    employeesAdapter.getSelectors((state) => state.employees);

const getEmployeesSlice = createSlice({
    name: "employees",
    initialState: employeesAdapter.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [getEmployees.fulfilled](state, {payload}) {
            employeesAdapter.setAll(state, payload);
            state.loading = false;
        },
        [getEmployees.pending](state) {
            state.loading = true;
        },
        [getEmployees.rejected](state, action) {
            state.error = action.error.message;
            state.loading = false;
        },
    },
});

export default getEmployeesSlice.reducer;
