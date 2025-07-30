import { createSlice } from '@reduxjs/toolkit'
import userReducers from './reducers'

const userSlice = createSlice({
    name: "user",
    initialState: {
        apiState: {
            success: false,
            isError: false,
            message: "",
        },
        user: {
            _id: "",
            name: "",
            email: "",
            mobileNo: "",
            profilePic: "",
            categories: [],
            token: "",
        }
    },
    reducers: userReducers,
});

// Slice exports two things actions and reducers
// actions are used with dispatch
export const userActions = userSlice.actions;

// Reducders are default expport
// export default userSlice.reducer;
// reducers from slice are used in store
export default userSlice;