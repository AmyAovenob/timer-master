import React from 'react';
import { Link } from 'react-router-dom'


const Service = () => {
    return (
        <div>
            <section className="global-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2>Service</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">
                                            <i className="ion-ios-home"></i>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="active">Service</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service-page" className="pages service-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="block">
                                <h2 className="subtitle wow fadeInUp animated" data-wow-delay=".3s" data-wow-duration="500ms">What We Love To Do</h2>
                                <p className="subtitle-des wow fadeInUp animated" data-wow-delay=".5s" data-wow-duration="500ms">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis porro recusandae non quibusdam iure adipisci.</p>
                                <div className="row service-parts">
                                    <div className="col-md-6">
                                        <div className="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="600ms">
                                            <i className="ion-ios-paper-outline"></i>
                                            <h4>BRANDING</h4>
                                            <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="800ms">
                                            <i className="ion-ios-pint-outline"></i>
                                            <h4>DESIGN</h4>
                                            <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="1s">
                                            <i className="ion-ios-paper-outline"></i>
                                            <h4>DEVELOPMENT</h4>
                                            <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="1.1s">
                                            <i className="ion-ios-paper-outline"></i>
                                            <h4>THEMEING</h4>
                                            <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="block">
                                <img className="img-responsive" src="images/team.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="works service-page">
                <div className="container">
                    <h2 className="subtitle wow fadeInUp animated" data-wow-delay=".3s" data-wow-duration="500ms">Some Of Our Features Works</h2>
                        <p className="subtitle-des wow fadeInUp animated" data-wow-delay=".5s" data-wow-duration="500ms">
                            Aliquam lobortis. Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Nulla sit amet est. Aenean posuere <br /> tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                        </p>
                    <div className="row">
                        <div className="col-sm-3">
                            <figure className="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-1.jpg" className="img-responsive" alt="this is a title" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-1.jpg">Demo</a>        
                                            <a target="_blank" href="/">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                    <h4>
                                        <a href="/">
                                            Dew Drop        
                                        </a>
                                    </h4>
                                    <p>
                                        Redesigne UI Concept
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-3">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-2.jpg" className="img-responsive" alt="this is a title" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-2.jpg">Demo</a>        
                                            <a target="_blank" href="/">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                    <h4>
                                        <a href="/">
                                            Bottle Mockup        
                                        </a>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit.
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-3">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-3.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-3.jpg">Demo</a>        
                                            <a target="_blank" href="/">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                    <h4>
                                        <a href="/">
                                            Table Design        
                                        </a>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-3">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="600ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-4.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-4.jpg">Demo</a>        
                                            <a target="_blank" href="/">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                    <h4>
                                        <a href="/">
                                            Make Up elements        
                                        </a>
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor.
                                    </p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section id="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="subtitle text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay=".3s">Our Happy Clinets</h2>
                            <p className="subtitle-des text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay=".5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, error.</p>
                            <div id="clients-logo" className="owl-carousel">
                                <div>
                                    <img src="images/clients/logo-1.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-3.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-4.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-5.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-1.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-3.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-4.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="images/clients/logo-5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Service