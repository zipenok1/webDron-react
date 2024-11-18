import React from "react";
import '../../Styles/description.css'

function Description({text}) {
    return (
      <div className="Description">
            <p>{text}</p>    
      </div>
    );
  }
  
  export default Description;