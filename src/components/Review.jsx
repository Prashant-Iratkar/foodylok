import React from "react";
import "./Review.css";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";

const Review = () => {
  return (
    <>
      <section className="review">
        <h1 className="heading">
          Customer's -<span>Review</span>
        </h1>
        <div className="box-container">
          {review.map((item, index) => (
            <div className="box">
              <img src={qouteImg} alt="" className="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptatem dignissimos sunt, numquam maxime commodi laudantium
                soluta exercitationem eos culpa vel cum iste sit itaque
                recusandae fuga provident deleniti beatae!
              </p>
              <img src={item.img} alt="" className="user"/>
              <h3>{item.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
