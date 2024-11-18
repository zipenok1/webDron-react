import React from "react";
import Title from "./UI/Title";
import '../Styles/blog.css'
import BlogCards from "./UI/BlogCards";
function Blog() {
    return (
      <div className="Blog">
        <div className="Blog__title">
            <Title text='Блог'/>
        </div>

        <div className="Blog__cont">
            <BlogCards/>
            <BlogCards/>
            <BlogCards/>
            <BlogCards/>
        </div>

      </div>
    );
  }
  
  export default Blog;