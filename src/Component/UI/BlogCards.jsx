import React from "react";
import Blog from '../../Images/imgBlog.png'
import Description from "./Description";
import '../../Styles/blogCards.css'

function BlogCards({text}) {
    return (
      <div className="BlogCards">
        <div className="BlogCards__item">
            <img src={Blog} alt="#" />
            <Description text='DJI представила дрон Air 3S: все особенности новинки'/>
        </div>
      </div>
    );
  }
  
  export default BlogCards;