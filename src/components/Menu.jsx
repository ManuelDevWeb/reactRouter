import { useContext } from "react";
//Importando el context
import UserContext from "../store/UserContext";

const Menu = () => {
    //Accediendo a los valores del useContext
    const { user, login, logout } = useContext(UserContext);

    console.log("Menu");
    return (
        <div>
            <h1>Menu</h1>
            <h3>User:{user.name}</h3>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Menu;