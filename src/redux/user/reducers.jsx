
const reducers = {
    setUserData(state, action) {
        console.log("action:", action);
        console.log("payload:", action.payload);

        const {
            _id,
            name,
            email,
            mobileNo,
            profilePic,
            categories,
            token,
        } = action.payload;

        state.user._id = _id;
        state.user.name = name;
        state.user.email = email;
        state.user.mobileNo = mobileNo;
        state.user.profilePic = profilePic;
        state.user.categories = categories;
        state.user.token = token;
    },
    setUserApiState(state, action) {
        const {
            success,
            isError,
            message,
        } = action.payload;

        state.apiState.success = success;
        state.apiState.isError = isError;
        state.apiState.message = message;
    },
    setUserApiLoading(state, action) {
        const {
            isLoading,
            // isError,
            // message,
        } = action.payload;

        state.apiState.isLoading = isLoading;
        // state.apiState.isError = isError;
        // state.apiState.message = message;
    },
    setUserApiError(state, action) {
        const {
            // isLoading,
            isError,
            message,
        } = action.payload;

        // state.apiState.isLoading = isLoading;
        state.apiState.isError = isError;
        state.apiState.message = message;
    },
};

export default reducers;