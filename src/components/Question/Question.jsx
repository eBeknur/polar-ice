import React from 'react';
import "./Question.css";

const Question = () => {
  return (
    <section className="question">
        <div className="container">
            <div className="question_text">
                <h2>
                Have Question in Mind? Let us help you
                </h2>
                <div className="enter_question">
                    <input type="text" placeholder='Enter your question' />
                    <div className="btn_navbar  footer_btn">
                     <a href="#">Send</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Question