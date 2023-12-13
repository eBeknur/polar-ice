


import React from 'react';
import "./Products.css";

const Products = () => {
  return (
    <section className="cards_section">
        <div className="container">
        <div className="cards">

        <div className="card">
          <div className="img_card">
            <img src="../public/image/free_shipping.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>Free Shipping</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
        <div className="card">
          <div className="img_card">
            <img src="../public/image/quick_packgaking.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>Quick Packaging</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
        <div className="card">
          <div className="img_card">
            <img src="../public/image/cash_back.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>100% Money Back</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
        <div className="card">
          <div className="img_card">
            <img src="../public/image/fast_delivery.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>Fast Delivery</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>

        </div>
        </div>
      </section>
  )
}

export default Products;


