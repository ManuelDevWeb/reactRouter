import { useContext } from "react";
import StoreContext from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

const Menu = () => {
    console.log("Menu")
    //Accediendo a los valores del useContext
    const [{ user }, dispatch] = useContext(StoreContext);

    const handleLogin = () => {
        dispatch({
            type: types.AUTH_LOGIN,
            payload: { id: 5, name: "Natalia" }
        })
    }

    const handleLogout = () => {
        dispatch({
            type: types.AUTH_LOGOUT,

        })
    }

    return (
        <div>
            <h1>Menu</h1>
            <h3>User:{user?.name}</h3>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Menu;