import { createContext, useState } from "react";

const UserContext = createContext();

const initialState = {
    id: 1,
    name: "Manuel",
};

const UserProvider = ({ children }) => {
    //useState para manejar estado del componente
    const [user, setUser] = useState(initialState);

    const login = () => {
        setUser(initialState);
    };

    const logout = () => {
        setUser("");
    };

    const data = { user, login, logout };
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
