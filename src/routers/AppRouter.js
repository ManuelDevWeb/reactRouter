import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Importando componentes de las respectivas páginas
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DemoPage from "../pages/DemoPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import StudentPage from "../pages/StudentPage";
import TeacherPage from "../pages/TeacherPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import SettingsPage from "../pages/SettingsPage";
//Importando layout navbar
import Navbar from "../components/NavBar";
//Importando PrivateRouter
import PrivateRouter from "./PrivateRouter";

//Creando componente
const AppRouter = () => {
    return (
        //Permite al resto de las rutas funcionar
        <Router>
            <Navbar />
            <Switch>
                {/* Rutas de nuestra aplicación */}
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/demo" component={DemoPage} />
                <Route exact path="/student/:username" component={StudentPage} />
                <Route exact path="/teacher" component={TeacherPage} />

                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                {/*Ruta privada, enviamos los datos al componente PrivateRouter*/}
                <PrivateRouter exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/settings" component={SettingsPage} />

                <Route exact path="/" component={HomePage} />
                <Route exact path="*" component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

//Exportando componente
export default AppRouter;
