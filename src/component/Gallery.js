import React from 'react';
import { Link } from 'react-router-dom'


const Gallery = () => {
    return (
        <div>
            <section className="global-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2>Gallery</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">
                                            <i className="ion-ios-home"></i>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="active">Gallery</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated portfolio-item animated" data-wow-duration="500ms" data-wow-delay="0ms" style={{
                                visibility: 'visible', 
                                animationDuration: '300', 
                                webkitAnimationDuration: '300', 
                                animationDelay: '0', 
                                webkitAnimationDelay: '0', 
                                animationName: 'fadeInLeft', 
                                webkitAnimationName: 'fadeInLeft'
                            }}>
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-1.jpg" className="img-responsive" alt="this is a title" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-1.jpg">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated animated" data-wow-duration="500ms" data-wow-delay="300ms" style={{
                                visibility: 'visible', 
                                animationDuration: '300', 
                                webkitAnimationDuration: '300', 
                                animationDelay: '300', 
                                webkitAnimationDelay: '300', 
                                animationName: 'fadeInLeft', 
                                webkitAnimationName: 'fadeInLeft'
                            }}>
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-2.jpg" className="img-responsive" alt="this is a title" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-2.jpg">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated animated" data-wow-duration="500ms" data-wow-delay="500ms" style={{
                                visibility: 'visible', 
                                animationDuration: '300', 
                                webkitAnimationDuration: '300', 
                                animationDelay: '300', 
                                webkitAnimationDelay: '300', 
                                animationName: 'fadeInLeft', 
                                webkitAnimationName: 'fadeInLeft'
                            }}>
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-3.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-3.jpg">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="700ms" style={{
                                visibility: 'hidden', 
                                animationDuration: '300', 
                                webkitAnimationDuration: '300', 
                                animationDelay: '600', 
                                webkitAnimationDelay: '600', 
                                animationName: 'none', 
                                webkitAnimationName: 'none'
                            }}>
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-4.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-4.jpg">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="900ms" style={{
                                visibility: 'hidden', 
                                animationDuration: '300', 
                                webkitAnimationDuration: '300', 
                                animationDelay: '900', 
                                webkitAnimationDelay: '900', 
                                animationName: 'none', 
                                webkitAnimationName: 'none'
                            }}>
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-5.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-5.jpg">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="1100ms" style={{
                                visibility: 'hidden', 
                                animationDuration: '300', 
                                webkitAnimationDuration: '300', 
                                animationDelay: '1200', 
                                webkitAnimationDelay: '1200', 
                                animationName: 'none', 
                                webkitAnimationName: 'none'
                            }}>
                                <div className="img-wrapper">
                                    <img src="images/portfolio/item-6.jpg" className="img-responsive" alt="" />
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="images/portfolio/item-6.jpg">Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery