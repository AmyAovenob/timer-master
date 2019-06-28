import React from 'react';


const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="col-md-8">
                        <p className="copyright">Copyright: { new Date().getFullYear() } Design and Developed by <a href="http://www.emeley.com" rel="noopener noreferrer" target="_blank"><em>Amy_Aovenob</em></a>. <br /> 
                        Get More <a href="http://www.wafihal.com" rel="noopener noreferrer" target="_blank">Wafihal <sub>Zayan Software Firm</sub></a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <ul className="social">
                            <li>
                                <a href="https://www.facebook.com/Amy.Aovenab" rel="noopener noreferrer" className="Facebook">
                                    <i className="ion-social-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/AmyAovenab" rel="noopener noreferrer" className="Twitter">
                                    <i className="ion-social-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/md-tawhiduzzaman-amy-711ba3109/" rel="noopener noreferrer" className="Linkedin">
                                    <i className="ion-social-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://plus.google.com/u/0/104085456911048852075" rel="noopener noreferrer" className="Google Plus">
                                    <i className="ion-social-googleplus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer