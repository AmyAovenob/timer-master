import React from 'react';
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div>
            <section className="global-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2>About Company</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">
                                            <i className="ion-ios-home"></i>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="active">About</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="company-description">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s" >
                            <img src="images/about/about-company.jpg" alt="" className="img-responsive" />
                        </div>
                        <div className="col-md-6">
                            <div className="block">
                                <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration="500ms">Why We are Different</h3>
                                <p  className="wow fadeInUp" data-wow-delay=".5s" data-wow-duration="500ms">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p  className="wow fadeInUp" data-wow-delay=".7s" data-wow-duration="500ms">
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-feature clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="block about-feature-1 wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">
                            <h2>
                            Why Choose Us
                            </h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                            </p>
                        </div>
                        <div className="block about-feature-2 wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
                            <h2 className="item_title">
                            What You Get
                            </h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                            </p>
                        </div>
                        <div className="block about-feature-3 wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".7s">
                            <h2 className="item_title">
                            Meet The Energy
                            </h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team">
                <div className="container">
                    <div className="row">
                        <h2 className="subtitle text-center">Meet The Team</h2>
                        <div className="col-md-3">
                            <div className="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".3s">
                                <div className="team-img">
                                    <img src="images/team/team-1.jpg" className="team-pic" alt="" />
                                </div>
                                <h3 className="team_name">Jonathon Andrew</h3>
                                <p className="team_designation">CEO, Project Manager</p>
                                <p className="team_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                                <p className="social-icons">
                                    <a href="/" className="facebook" target="_blank"><i className="ion-social-facebook-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-twitter-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-linkedin-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-googleplus-outline"></i></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".5s">
                                <div className="team-img">
                                    <img src="images/team/team-2.jpg" className="team-pic" alt="" />
                                </div>
                                <h3 className="team_name">Jesmin Martina</h3>
                                <p className="team_designation">CEO, Project Manager</p>
                                <p className="team_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
                                <p className="social-icons">
                                    <a href="/" className="facebook" target="_blank"><i className="ion-social-facebook-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-twitter-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-linkedin-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-googleplus-outline"></i></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                                <div className="team-img">
                                    <img src="images/team/team-3.jpg" className="team-pic" alt="" />
                                </div>
                                <h3 className="team_name">Deu John</h3>
                                <p className="team_designation">CEO, Project Manager</p>
                                <p className="team_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
                                <p className="social-icons">
                                    <a href="/" className="facebook" target="_blank"><i className="ion-social-facebook-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-twitter-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-linkedin-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-googleplus-outline"></i></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                                <div className="team-img">
                                    <img src="images/team/team-4.jpg" className="team-pic" alt="" />
                                </div>
                                <h3 className="team_name">Anderson Martin</h3>
                                <p className="team_designation">CEO, Project Manager</p>
                                <p className="team_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
                                <p className="social-icons">
                                    <a href="/" className="facebook" target="_blank"><i className="ion-social-facebook-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-twitter-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-linkedin-outline"></i></a>
                                    <a href="/" target="_blank"><i className="ion-social-googleplus-outline"></i></a>
                                </p>
                            </div>
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

export default About