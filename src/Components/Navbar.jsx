import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar()
{
    return(
        <nav>
            <h1>MoviesAnthem</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to ='/Movies'>Movies</Link></li>
            </ul>
        </nav>
    )

}