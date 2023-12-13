import React from 'react';
import "./Ourproduct.css"
const Ourproduct = () => {
  return (
    <section className="our_product_section">
    <div className="container">
      <div className="menu_product_part">
        <h2>Our Product</h2>
        <div className="menu">
          <ul>
            <li><a href="">ICE CREAM</a></li>
            <li><a href="">CAYENNE CHOCOLATE</a></li>
            <li><a href="">CAKE BATTER</a></li>
            <li><a href="">CANDY CANE</a></li>
            <li><a href="">PLATTERS</a></li>
            <li><a href="">DESSERT</a></li>
          </ul>
        </div>
      </div>
      <div className="our_product_cards">

        <div className="our_product_card">
        <div className="product_right_part">
          <img src="../public/image/brownBread.png" alt="" />
        </div>
        <div className="product_left_part">
        <h4>Brown bread</h4>
        <p>
        Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.
        </p>
        <h3>$19.55<span>$22.55</span></h3>
        <div className="btn_navbar header_btn">
            <a href="#">Buy Now</a>
          </div>
        </div>
        </div>

        <div className="our_product_card">
        <div className="product_left_part">
        <h4>Cayenne chocolate</h4>
        <p>
        Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.
        </p>
        <h3>$19.55<span>$22.55</span></h3>
        <div className="btn_navbar header_btn">
            <a href="#">Buy Now</a>
          </div>
        </div>
        <div className="product_right_part">
          <img src="../public/image/cayenneChokolate.png" alt="" />
        </div>
        </div>

        <div className="our_product_card">
        <div className="product_right_part">
          <img src="../public/image/sweetCom.png" alt="" />
        </div>
        <div className="product_left_part">
        <h4>Sweet corn</h4>
        <p>
        Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.
        </p>
        <h3>$19.55<span>$22.55</span></h3>
        <div className="btn_navbar header_btn">
            <a href="#">Buy Now</a>
          </div>
        </div>
        </div>

        <div className="our_product_card">
        <div className="product_left_part">
       <div className="adel_part">
        <div className="img">
          <img src="../public/image/adele. A.png" alt="" />
        </div>
        <div className="adel_text_part">
          <h4>Adele A. McNeill</h4>
          <p>AMIRICAN</p>
        </div>
       </div>
       <div className="textUser">
        <p>
        <img className='quote1' src="../public/image/qouteYopilgan.png" alt="" />
        Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.
        <img className='quote2' src="../public/image/quoteOchilgan.png" alt="" />
        </p>
        <div className="slider">
        {/* <i class="fa-solid fa-chevron-left"></i> */}
        <img src="../../../public/image/right-arrow 2.png" alt="" />
        <img className='person' src="../../../public/image/person.png" alt="" />
        <img className='big' src="../../../public/image/adele. A.png" alt="" />
        <img className='small' src="../../../public/image/adele. A.png" alt="" />
        <img src="../../../public/image/right-arrow 1.png" alt="" />
        {/* <i class="fa-solid fa-chevron-right"></i> */}
        </div>
       </div>
        </div>
        <div className="product_right_part">
          <img src="../public/image/addele.png" alt="" />
        </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Ourproduct