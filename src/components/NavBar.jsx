import React from "react";
//Importando NavLink
import { NavLink } from "react-router-dom";

//Creando componente
const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 " id="navs">
                    <nav>
                        <ul className="nav nav-pills nav-justified nav-fill">
                            <li className="nav-item">
                                <NavLink exact to="/" activeclassname="active">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/about" activeclassname="active">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/contact" activeclassname="active">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/demo" activeclassname="active">
                                    Demo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/student/:username" activeclassname="active">
                                    Student
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/teacher" activeclassname="active">
                                    Teacher
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/login" activeclassname="active">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/register" activeclassname="active">
                                    Register
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/dashboard" activeclassname="active">
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/settings" activeclassname="active">
                                    Settings
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

//Exportando componente
export default Navbar;
