import React from 'react';
import "./Footer.css";
import insta from '../assets/instagram.png';
import fb from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
            <div className="sb__footer-links_div">
                    <h4>COMPANY INFO</h4>
                    <a href='#'>
                        <p>About</p>
                    </a>
                    <a href='#'>
                        <p>Social Responsibilities</p>
                    </a>
                    <a href='#'>
                        <p>Afflicate</p>
                    </a>
                    <a href='#'>
                        <p>fashion Blogger</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>HELP & SUPPORT</h4>
                    <a href='#'>
                        <p>Shipping Info</p>
                    </a>
                    <a href='#'>
                        <p>Returns</p>
                    </a>
                    <a href='#'>
                        <p>How To Order</p>
                    </a>
                    <a href='#'>
                        <p>Size Chart</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>CUSTOMER CARES</h4>
                    <a href='#'>
                        <p>Contact Us</p>
                    </a>
                    <a href='#'>
                        <p>Payments</p>
                    </a>
                    <a href='#'>
                        <p>Bonus Points</p>
                    </a>
                    <a href='#'>
                        <p>Notices</p>
                    </a>
                </div>

                <div className="sb__footer-links_div">
                    <h4>Comming Soon</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=''></img></p>
                        <p><img src={twitter} alt=''></img></p>
                        <p><img src={linkedin} alt=''></img></p>
                        <p><img src={insta} alt=''></img></p>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className='sb__footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Vivriti. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/terms"><div><p>Privacy</p></div></a>
                        <a href="/terms"><div><p>Security</p></div></a>
                        <a href="/terms"><div><p>Cookiee Declaration</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer;