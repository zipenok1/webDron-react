import React from "react";
import '../../Styles/title.css'

function Title({text}) {
    return (
      <div className="Title">
         <h1>{text}</h1>
      </div>
    );
  }
  
  export default Title;