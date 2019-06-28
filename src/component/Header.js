import React from 'react';
import Nav from './Nav'


const Header = () => {
    return (
        <header id="top-bar" className="navbar-fixed-top animated-header">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-brand">
                        <a href="index.html" >
                            <img src="images/logo.png" alt="Timer Logo" />
                        </a>
                    </div>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header