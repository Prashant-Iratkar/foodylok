import React from 'react';
import './Product.css';
import { product } from '../Data';

const Product = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
            OUR- <span>PRODUCT</span>
        </h1>
        <div className="box-container">
            {
                product.map((item,index)=>(
                    <div className="box">
                        <div className="icons">
                        <a href="#" className='fas fa-shopping-cart'></a>
                        <a href="#" className='fas fa-heart'></a>
                        <a href="#" className='fas fa-eye'></a>
                    </div>
                    <div className="image">
                        <img src={item.img} alt="" />
                    </div>
                    <span className='AA'>{item.name}</span>
                </div>
                ))
            }
        </div>
      </section>
    </>
  );
};

export default Product;
