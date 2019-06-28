import React from 'react';
import { Link } from 'react-router-dom'

const pages= ['About', 'Service', 'Gallery', 'Blog', 'Single post', 'Contact', '404']


const GlobalPageHeader = () => {
    return (
        <div>
            <section className="global-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2>Contact</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">
                                            <i className="ion-ios-home"></i>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="active">Contact</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GlobalPageHeader