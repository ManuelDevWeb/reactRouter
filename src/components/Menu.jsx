import { useContext } from "react";
//Importando el context
import UserContext from "../store/UserContext";

const Menu = () => {
    //Accediendo a los valores del useContext
    const { user } = useContext(UserContext);


    return (
        <div>
            <h1>Menu</h1>
            <h3>User:{user.name}</h3>
        </div>
    );
}

export default Menu;