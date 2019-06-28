import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const initialstate = {
    name: '',
    email: '',
    subject: '',
    message: '',
    isSubmit: false,
    error: false
}

class Contact extends Component {

    constructor () {
        super()
        this.forms = React.createRef()
    }

    state = {
        ...initialstate
    }

    changeHandelar = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    submitHandelar = e => {
        e.preventDefault()
        console.log(this.state)
        this.forms.current.reset()
        this.setState({
            ...initialstate
        })

        .then(res => {
            this.setState({
                isSubmit: true,
                error: false
            })
            console.log(res);
        })
        .catch(error => {
            this.setState({
                error: true,
                isSubmit: false
            })
        })
    }

    render () {
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
                <section id="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="block">
                                    <h2 className="subtitle wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Contact With Me</h2>
                                    <p className="subtitle-des wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea!
                                        consectetur adipisicing elit. Dolore, ea!
                                    </p>
                                    <div className="contact-form">
                                        <form id="contact-form" ref={ this.forms } onSubmit={ this.submitHandelar }>
                                            <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".6s">
                                                <input 
                                                    type="text" 
                                                    placeholder="Your Name" 
                                                    className="form-control" 
                                                    name="name" 
                                                    id="name" 
                                                    value={ this.state.name } 
                                                    onChange={ this.changeHandelar }
                                                />
                                            </div>
                                            
                                            <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".8s">
                                                <input 
                                                    type="email" 
                                                    placeholder="Your Email" 
                                                    className="form-control" 
                                                    name="email" 
                                                    id="email" 
                                                    value={ this.state.email } 
                                                    onChange={ this.changeHandelar }
                                                />
                                            </div>
                                            
                                            <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1s">
                                                <input 
                                                    type="text" 
                                                    placeholder="Subject" 
                                                    className="form-control" 
                                                    name="subject" 
                                                    id="subject" 
                                                    value={ this.state.subject } 
                                                    onChange={ this.changeHandelar }
                                                />
                                            </div>
                                            
                                            <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                                                <textarea 
                                                    rows="6" 
                                                    placeholder="Message" 
                                                    className="form-control" 
                                                    name="message" 
                                                    id="message" 
                                                    value={ this.state.message } 
                                                    onChange={ this.changeHandelar }
                                                ></textarea>    
                                            </div>
                                            
                                            <div id="success" className="success">
                                                { this.state.isSubmit && <p>Thank you. The Mailman is on His Way :)</p> }
                                            </div>
                                            
                                            <div id="error" className="error">
                                                { this.state.error && <p>Sorry, don't know what happened. Try later :(</p> }
                                            </div>
                                            
                                            <div id="submit" className="wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.4s">
                                                {/* <input type="submit" id="contact-submit" className="btn btn-default btn-send" value="Send Message" /> */}
                                                <button type="submit" id="contact-submit" className="btn btn-default btn-send">Send Message</button>
                                            </div>                      
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="map-area">
                                    <h2 className="subtitle  wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Find Us</h2>
                                    <p className="subtitle-des wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
                                        Si aute quis eu proident o cupidatat ne anim nescius, et est praesentibus, o quorum vidisse expetendis, nostrud eram quibusdam ad nam nostrud ubi.
                                    </p>
                                    <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277552998015!2d90.3678744!3d23.773128800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ae4adf3cb9%3A0x7f2cf443b764e4a4!2sShishu+Mela!5e0!3m2!1sen!2s!4v1435516022247" width="100%" height="400" frameborder="0" style={{ border: '0' }} title="Map" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row address-details">
                            <div className="col-md-3">
                                <div className="address wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".3s">
                                    <i className="ion-ios-location-outline"></i>
                                    <h5>16/4 Pallabi, Mirpur <br />Dhaka- 1216</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="address wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".5s">
                                    <i className="ion-ios-location-outline"></i>
                                    <h5>125 , Kings Street,Melbourne <br />United Kingdom,600562</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="email wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                                    <i className="ion-ios-email-outline"></i>
                                    <p>tawhid.w3@gmail.com<br />amely228@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="phone wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                                    <i className="ion-ios-telephone-outline"></i>
                                    <p>+880 1717 24 92 25<br />+880 1681 522 443</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
            </div>
        )
    }
}

export default Contact