import React from 'react';
 import './login.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>SIGN IN</h2>
                <p>Enter your email and password to login</p>
                <form>
                    <div className="input-group">
                        <input type="email" placeholder="Enter Email" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Enter Password" required />
                    </div>
                    <div className="newsletter">
                        <input type="checkbox" id="subscribe" />
                        <label htmlFor="subscribe">Subscribe to weekly newsletter</label>
                    </div>
                    <button type="submit" className="sign-in-button">SIGN IN</button>
                </form>
                <div className="or">OR</div>
                {/* <div className="social-login">
                    <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="social-icon"><FontAwesomeIcon icon={faGoogle} /></a>
                </div> */}
                <div className="sign-up">
                    <p>Don't have an account? <a href="#">SIGN UP</a></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
