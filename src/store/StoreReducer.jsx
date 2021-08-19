const types = {
    AUTH_LOGIN: 'auth-login',
    AUTH_LOGOUT: 'auth-logout',
    PRODUCT_DELETE_ALL: 'product-delete',
    PRODUCT_CHANGE: 'product-change'
}

const initialStore = {
    user: { id: 1, name: "Jorge" },
    products: [
        { id: 1, title: "Product #1" },
        { id: 2, title: "Product #2" },
        { id: 3, title: "Product #3" },
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
                user: null
            }
        case types.PRODUCT_DELETE_ALL:
            return {
                ...state,
                products: []
            }
        case types.PRODUCT_CHANGE:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export { initialStore, types };
export default storeReducer;