
const reducers = {
    showLoader(state, action) {
        state.showLoader = true;
    },
    hideLoader(state, action) {
        state.showLoader = false;
    },
};

export default reducers;