import { useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";

const { createContext } = require("react");

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore)
    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider }
export default StoreContext;