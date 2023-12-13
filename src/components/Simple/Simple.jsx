import React from 'react';
import "./Simple.css";

const Simple = () => {
  return (
    <section className="simple">
        <div className="container">
            <div className="simple_part">
            <div className="simplae_left">
                <img src="../../../public/image/raspberry.png" alt="" />
            </div>
            <div className="simple_right">
                <h2>Simple Way To Order Your Food</h2>
                <p>
                Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.
                </p>
                <div className="abouts">
                    <div className="about">
                        <div className="about_img">
                        <img className='select' src="../../../public/image/select.png" alt="" />
                        </div>
                        <h5>Select Your Food</h5>
                    </div>
                    <div className="about">
                        <div className="about_img">
                        <img className='select' src="../../../public/image/addCart.png" alt="" />
                        </div>
                        <h5>Add To Cart</h5>
                    </div>
                    <div className="about">
                        <div className="about_img">
                        <img className='select' src="../../../public/image/order.png" alt="" />
                        </div>
                        <h5>Order Your Food</h5>
                    </div>
                </div>
                <div className="company">
                <img src="../../../public/image/google.png" alt="" />
                <img src="../../../public/image/app.png" alt="" />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Simple