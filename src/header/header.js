import React from "react";
import {Outlet, NavLink} from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Главная</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                aria-current="page" to="/create-project">Создать Проект</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                to="/create-entity">Создание сущностей</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                to="/create-controller">Создание Контроллера</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Header;