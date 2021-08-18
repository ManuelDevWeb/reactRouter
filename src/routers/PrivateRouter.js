import React from 'react'
import { Redirect, Route } from "react-router-dom";

const user = null;
//const user = { id: 1, name: "Pedro", rol: "admin" };

//Creando componente
const PrivateRouter = ({ component: DashboardPage, ...props }) => {
    return (
        //En los props vienen: exact y path
        <Route {...props}>
            {
                //Si no existe un usuario, lo redireccionamos a login
                user ? <DashboardPage /> : <Redirect to="/login" />
            }
        </Route>

    );
}

//Exportando componente
export default PrivateRouter;