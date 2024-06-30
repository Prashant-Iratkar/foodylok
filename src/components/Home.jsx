import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Welcome To <span>FOODYLOK</span>
          </h3>
          <p>
            "A restaurant is a fantasy—a kind of living fantasy in which diners
            are the most important members of the cast." - Warner LeRoy
          </p>
          <p>
            "A restaurant should remove you from the mundane burdens of everyday
            life and transport you to another world." - Danny Meyer
          </p>
          <a href="#" className="btn">
            Your Order
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
