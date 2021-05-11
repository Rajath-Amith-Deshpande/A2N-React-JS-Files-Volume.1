import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-dark bg-dark">
                 <a href="#" className="navbar-brand">React App</a>
              
             
                    <ul className="nav">
                   <li className="nav-item"><Link to="/" className="nav-link text-white">Login</Link></li>
                   <li className="nav-item"><Link to="/getData" className="nav-link text-white">GetData</Link></li>
                   <li className="nav-item"><Link to="/servce" className="nav-link text-white">Service</Link></li>
                    </ul>
                </div>
                </div>
        )
    }
}
