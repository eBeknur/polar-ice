
import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header>
    <div className="container">
  <nav>
    <div className="navbar">
      <div className="logo">
        <img src="../public/image/logo.png"/>
      </div>
      <div className="navbar_right">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Product</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        <div className="btn_navbar">
          <a href="#">Buy Now</a>
        </div>
      </div>

    </div>
  </nav>

  <div className="header_part">
  <div className="header_text_part">
    <h5>Sweet fun, full of milk.</h5>
    <h1>
    Feel inside cold with our delicious <span>ice-cream.</span>
    </h1>
    <p>
    Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.
    </p>
    <div className="btn_navbar header_btn">
          <a href="#">Buy Now</a>
        </div>
  </div>
  <div className="header_img_part">
    <img className="iceCream" src="../public/image/iceCreamImg.png" alt="" />
    <img className="milk" src="../public/image/milkImg.png" alt="" />
    <div className="circle"></div>
    <img className="shaow" src="../public/image/ellips.png" alt="" />
  </div>
  </div>

  </div>
</header>
  )
}

export default Header

    
