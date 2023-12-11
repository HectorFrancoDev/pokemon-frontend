import React from 'react'
import logo from '../logo.svg'

function NavBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    Pokedex - Client Side
                </a>
            </div>
        </nav>
    )
}

export default NavBar
