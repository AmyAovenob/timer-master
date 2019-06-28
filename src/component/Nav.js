import React from 'react';
import { NavLink } from 'react-router-dom'

const navStyle = {
    color: '#02bdd5',
    outline: 'none'
}


const Nav = () => {
    return (
        <nav className="collapse navbar-collapse navbar-right" role="navigation">
            <div className="main-menu">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <NavLink activeStyle={ navStyle } exact to="/" >Home</NavLink>
                    </li>
                    <li><NavLink activeStyle={ navStyle } to="/about">About</NavLink></li>
                    <li><NavLink activeStyle={ navStyle } to="/service">Service</NavLink></li>
                    <li><NavLink activeStyle={ navStyle } to="/gallery">Gallery</NavLink></li>
                    <li><NavLink activeStyle={ navStyle } to="/blog">Blog</NavLink></li>
                    <li><NavLink activeStyle={ navStyle } to="/contact">Contact</NavLink></li>
                    <li><NavLink activeStyle={ navStyle } to="/404">404</NavLink></li>
                    {/* <li className="dropdown">
                        <NavLink activeStyle={ navStyle } to="#" className="dropdown-toggle" data-toggle="dropdown">Pages <span className="caret"></span></NavLink>
                        <div className="dropdown-menu">
                            <ul>
                                <li><NavLink activeStyle={ navStyle } to="404.html">404 Page</NavLink></li>
                                <li><NavLink activeStyle={ navStyle } to="gallery.html">Gallery</NavLink></li>
                            </ul>
                        </div>
                    </li> */}
                    {/* <li className="dropdown">
                        <NavLink activeStyle={ navStyle } to="#" className="dropdown-toggle" data-toggle="dropdown">Blog <span className="caret"></span></NavLink>
                        <div className="dropdown-menu">
                            <ul>
                                <li><NavLink activeStyle={ navStyle } to="blog-fullwidth.html">Blog Full</NavLink></li>
                                <li><NavLink activeStyle={ navStyle } to="blog-left-sidebar.html">Blog Left sidebar</NavLink></li>
                                <li><NavLink activeStyle={ navStyle } to="blog-right-sidebar.html">Blog Right sidebar</NavLink></li>
                            </ul>
                        </div>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav