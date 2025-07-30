import { createSlice } from '@reduxjs/toolkit'
import loaderReducers from './reducers'

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        showLoader: false,
    },
    reducers: loaderReducers,
});

// Slice exports two things actions and reducers
// actions are used with dispatch
export const loaderActions = loaderSlice.actions;

// Reducders are default expport
// export default userSlice.reducer;
// reducers from slice are used in store
export default loaderSlice;