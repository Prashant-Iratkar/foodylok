import React, { useRef } from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";

const Navbar = () => {
  const searchRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const cartRef = useRef();
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const navbarRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">ABOUT</a>
          <a href="#menu">MENU</a>
          <a href="#product">PRODUCTS</a>
          <a href="#review">REVIEW</a>
          <a href="#contact">CONTACT</a>
          <a href="#blogs">BLOGS</a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">Rs.120/-</div>
              </div>
            </div>
          ))}
          <a className="btn" href="#">
            Checkout know
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
