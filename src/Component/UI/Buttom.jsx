import React from "react";
import '../../Styles/buttom.css'

function Buttom({text}) {
    return (
      <div className="Buttom">
            <button className="Buttom__detail">{text}</button>
      </div>
    );
  }
  
  export default Buttom;