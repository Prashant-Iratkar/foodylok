import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>CONTACT</span>-US
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.8787326216072!2d73.95242344808689!3d18.500593669894123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c20482b0f683%3A0x5844c13a42273d2a!2sGadital%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e0!3m2!1sen!2sin!4v1719719661629!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <form action="">
            <h3>Contact With Us</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="Your Name" required/>
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="Your Email" required/>
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" placeholder="Your Number" required/>
            </div>
            <input type="submit" value="Contact Now" className="btn"/>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contactus;
