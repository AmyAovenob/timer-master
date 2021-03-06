import React from 'react';


const Home = () => {
    return (
        <div>
            <section id="hero-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="block wow fadeInUp" data-wow-delay=".3s">
                                <section className="cd-intro">
                                    <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >
                                    <span>HI, MY NAME IS <br /> Md. Tawhiduzzaman Amy & I AM A</span><br />
                                    <span className="cd-words-wrapper">
                                        <b className="is-visible">DESIGNER</b>
                                        <b>DEVELOPER</b>
                                        <b>ENTERTAINER</b>
                                    </span>
                                    </h1>
                                </section>
                                <h2 className="wow fadeInUp animated" data-wow-delay=".6s" >
                                    With 10 years experience, I've occupied many roles including digital design director,<br /> web designer and developer. This site showcases some of my work.
                                </h2>
                                <a className="btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green" data-wow-delay=".9s" href="/Works" data-section="#works">View Works</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
                                <h2>
                                ABOUT ME
                                </h2>
                                <p>
                                    Hello, I’m a UI/UX Designer & Front End Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.And scrambled it to make a type specimen book. It has survived not only five centuries
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, adipisci voluptatum repudiandae, natus impedit repellat aut officia illum at assumenda iusto reiciendis placeat. Temporibus, vero.
                                </p>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
                                <img src="images/about/about.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="works" className="works">
                <div className="container">
                    <div className="section-heading">
                        <h1 className="title wow fadeInDown" data-wow-delay=".3s">Latest Works</h1>
                        <p className="wow fadeInDown" data-wow-delay=".5s">
                            Aliquam lobortis. Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Nulla sit amet est. Aenean posuere <br /> tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-1.jpg" className="img-responsive" alt="this is a title" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-1.jpg">Demo</a>
                                            <a target="_blank" href="single-portfolio.html">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                    <h4>
                                        <a href="index.html">Dew Drop</a>
                                    </h4>
                                    <p>Redesigne UI Concept</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-2.jpg" className="img-responsive" alt="this is a title" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-2.jpg">Demo</a>
                                            <a target="_blank" href="single-portfolio.html">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                <h4>
                                <a href="index.html">
                                    Bottle Mockup
                                </a>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit.
                                </p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-3.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-3.jpg">Demo</a>
                                            <a target="_blank" href="single-portfolio.html">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                <h4>
                                <a href="index.html">
                                    Table Design
                                </a>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet.
                                </p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="600ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-4.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-4.jpg">Demo</a>
                                            <a target="_blank" href="single-portfolio.html">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                <h4>
                                <a href="index.html">
                                    Make Up elements
                                </a>
                                </h4>
                                <p>
                                    Lorem ipsum dolor.
                                </p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="900ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-5.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-5.jpg">Demo</a>
                                            <a target="_blank" href="single-portfolio.html">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                <h4>
                                <a href="index.html">
                                    Shoping Bag Concept
                                </a>
                                </h4>
                                <p>
                                    Lorem ipsum dolor.
                                </p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="1200ms">
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-6.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-6.jpg">Demo</a>
                                            <a target="_blank" href="single-portfolio.html">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                <h4>
                                <a href="index.html">
                                    Caramel Bottle
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
            <section id="feature">
                <div className="container">
                    <div className="section-heading">
                        <h1 className="title wow fadeInDown" data-wow-delay=".3s">Offer From Me</h1>
                        <p className="wow fadeInDown" data-wow-delay=".5s">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,<br /> quasi dolores numquam dolor vero ex, tempora commodi repellendus quod laborum.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <div className="media wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="media-left">
                                    <div className="icon">
                                        <i className="ion-ios-flask-outline"></i>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Media heading</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="600ms">
                                <div className="media-left">
                                    <div className="icon">
                                        <i className="ion-ios-lightbulb-outline"></i>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Well documented.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                                <div className="media-left">
                                    <div className="icon">
                                        <i className="ion-ios-lightbulb-outline"></i>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Well documented.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1200ms">
                                <div className="media-left">
                                    <div className="icon">
                                        <i className="ion-ios-americanfootball-outline"></i>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Free updates</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1500ms">
                                <div className="media-left">
                                    <div className="icon">
                                        <i className="ion-ios-keypad-outline"></i>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Solid Support</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xs-12">
                            <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1800ms">
                                <div className="media-left">
                                    <div className="icon">
                                        <i className="ion-ios-barcode-outline"></i>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Simple Installation</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home