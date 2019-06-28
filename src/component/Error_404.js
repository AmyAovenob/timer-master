import React from 'react';
import { Link } from 'react-router-dom'


const Error_404 = () => {
    return (
        <div>
            <section className="moduler wrapper_404">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >404</h1>
                                <h2 className="wow fadeInUp animated" data-wow-delay=".6s">Opps! You have some problems</h2>
                                <p className="wow fadeInUp animated" data-wow-delay=".9s">The page you are looking for was moved, removed, renamed or might never existed.</p>
                                <Link to="/" className="btn btn-dafault btn-home wow fadeInUp animated" data-wow-delay="1.1s">Go Home</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Error_404