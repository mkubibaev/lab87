const initialState = {
    registerError: null,
    loginError: null,
    user: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default usersReducer;
