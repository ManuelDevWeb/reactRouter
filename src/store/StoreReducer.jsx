const types = {
    AUTH_LOGIN: 'auth-login',
    AUTH_LOGOUT: 'auth-logout'
}

const initialStore = {
    user: { id: 1, name: "Jorge" },
    products: [
        { id: 1, title: "Product #1" },
        { id: 1, title: "Product #1" },
        { id: 1, title: "Product #1" },
    ]
};

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.AUTH_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case types.AUTH_LOGOUT:
            return {
                ...state,
                user: ''
            }
        default:
            return state
    }
}

export { initialStore, types };
export default storeReducer;