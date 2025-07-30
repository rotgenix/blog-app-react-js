import { configureStore } from '@reduxjs/toolkit'

import userSlice from './user/slices'
import loaderSlice from './loader/slices';

export const store = configureStore({
    reducer: {
        // here we import and use reducers
        [userSlice.name]: userSlice.reducer,
        [loaderSlice.name]: loaderSlice.reducer,
    },
});
