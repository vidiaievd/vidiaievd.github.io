import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const birthdayAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.lastName > b.lastName ? 1 : -1),
});

export const {
    selectAll: selectBirthdays,
    selectById: selectBirthdaysById,
    selectIds,
} = birthdayAdapter.getSelectors((state) => state.birthday);

const stateFromStorage = () => {
    let entities = {};
    const ids = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        entities[key] = JSON.parse(sessionStorage.getItem(key));
        ids.push(key);
    }
    return { entities, ids };
};

const birthdaySlice = createSlice({
    name: "birthday",
    initialState: birthdayAdapter.getInitialState({
        ids: stateFromStorage().ids,
        entities: stateFromStorage().entities,
    }),
    reducers: {
        addBirthday: {
            reducer: (state, action) => {
                birthdayAdapter.addOne(state, action.payload);
                sessionStorage.setItem(
                    action.payload.id,
                    JSON.stringify(action.payload)
                );
            },
        },
        removeBirthday: {
            reducer: (state, action) => {
                birthdayAdapter.removeOne(state, action.payload);
                sessionStorage.removeItem(action.payload);
            },
        },
        
    },
    extraReducers: {},
});

export const { addBirthday, removeBirthday, addToStorage } = birthdaySlice.actions;

export default birthdaySlice.reducer;
