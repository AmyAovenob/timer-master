import React from 'react';
import { Link } from 'react-router-dom'


const CallToAction = () => {
    return (
        <div>
            <section id="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2 className="title wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">SO WHAT YOU THINK ?</h2>
                                <p className="wow fadeInDown" data-wow-delay=".5s" data-wow-duration="500ms">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,<br />possimus commodi, fugiat magnam temporibus vero magni recusandae? Dolore, maxime praesentium.</p>
                                <Link to="/contact" className="btn btn-default btn-contact wow fadeInDown" data-wow-delay=".7s" data-wow-duration="500ms">Contact With Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CallToAction