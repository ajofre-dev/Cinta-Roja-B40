import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink className="navbar-brand text-white bg-dark" activeClassName="disabled" to="/">TO DO LIST</NavLink>
            {/*<a className="navbar-brand text-ligh" href="#">TO DO LIST</a>*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link text-light bg-dark" activeClassName="disabled" to="/add-task">Agregar Tarea</NavLink>
                        {/*<a className="nav-link" href="#">Agregar tarea<span className="sr-only">(current)</span></a>*/}
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light bg-dark" activeClassName="disabled" to="/about">Sobre el proyecto</NavLink>
                        {/*<a className="nav-link" href="#">Sobre el proyecto</a>*/}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppNav
