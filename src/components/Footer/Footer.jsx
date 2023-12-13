import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
        <div className="container">

            <div className="footer_part">

                <div className="address">
                <div className="footer_logo">
                    <img src="../../../public/image/logo.png" alt="" />
                    <p>
                    Some food has looked so awful that it's looked like something that the dog's brought home.
                    </p>
                    <h5>Fllow Us</h5>
                    <div className="icons">
                        <img src="../../../public/image/facebook 1.png" alt="" />
                        <img src="../../../public/image/twitter 1.png" alt="" />
                        <img src="../../../public/image/instagram 1.png" alt="" />
                        <img src="../../../public/image/linkedin 1.png" alt="" />
                    </div>
                </div>
                <div className="home">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                </div>

                <div className="middle">
                    <ul>
                        <li><a href="">Delivery Information</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Search Terms</a></li>
                        <li><a href="">Order & Return</a></li>
                    </ul>
                </div>

                <div className="newsletter">
                    <h5>Newsletter</h5>
                    <div className="enter_footer">
                        <input type="text"  placeholder='Your Email'/>
                        <div className="btn_navbar footer_btn">
                        <a href="#">Subscribe</a>
                        </div>
                    </div>
                    <div className="tolovlar">
                        <img src="../../../public/image/pp.png" alt="" />
                        <img src="../../../public/image/masterCard.png" alt="" />
                        <img src="../../../public/image/visa.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Footer