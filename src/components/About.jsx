import React from "react";
import "./About.css";
import AboutImg from "../assets/images/about-img.jpeg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>ABOUT </span>- us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="content">
            <h3>What Makes Our Food Special ...?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate voluptatibus et totam eaque sequi cumque, magni, quasi
              repellendus nihil incidunt fugiat officiis, ad debitis velit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rerum omnis vero nostrum repellat veniam natus nulla et!
            </p>
            <a href="#" className="btn">Learn More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
