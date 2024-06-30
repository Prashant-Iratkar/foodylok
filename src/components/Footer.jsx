import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
            <a href="#" className='fab fa-facebook-f'></a>
            <a href="#" className='fab fa-twitter'></a>
            <a href="#" className='fab fa-instagram'></a>
            <a href="#" className='fab fa-linkedin'></a>
            <a href="#" className='fab fa-google'></a>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">ABOUT</a>
          <a href="#menu">MENU</a>
          <a href="#product">PRODUCTS</a>
          <a href="#review">REVIEW</a>
          <a href="#contact">CONTACT</a>
          <a href="#blogs">BLOGS</a>
        </div>
        <div className="credit">
            Created By <span>PRASHANT IRATKAR</span>
        </div>
      </section>
    </>
  )
}

export default Footer;
