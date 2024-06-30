import React from 'react';
import './Menu.css';
import { menu } from '../Data';

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          OUR- <span>MENU</span>
        </h1>
        <div className="box-container">
            {
              menu.map((item,index)=>(
                <div className='box'>
                  <img src={item.img} alt="" />
                  <h3>{item.itemName}</h3>
                  <h2>{item.price}</h2>
                  <a href="" className='btn'>Add To Cart</a>
                </div>
              ))
            }
        </div>
      </section>
    </>
  );
};

export default Menu;
