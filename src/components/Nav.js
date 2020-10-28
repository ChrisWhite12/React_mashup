import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/yell">
                    <li>Yeller</li>
                </Link>
                <Link to="/cookie">
                    <li>Cookie</li>
                </Link>
                <Link to="/canvas">
                    <li>Canvas</li>
                </Link>
                <Link to="/movie">
                    <li>Movie</li>
                </Link>
                <Link to="/dynaform">
                    <li>DynaForm</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav