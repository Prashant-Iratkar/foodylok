import React from "react";
import "./Blogs.css";
import { blog } from "../Data";

const Blogs = () => {
  return (
    <>
      <section className="blogs" id="blog">
        <h1 className="heading">
          OUR- <span>BLOGS</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt="" className="" />
              </div>
              <div className="content">
                <a href="#" className="title">
                  Test For Refreshment
                </a>
                <span>{item.commit}</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, saepe.
                </p>
                <a href="#" className="btn">Click For More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
