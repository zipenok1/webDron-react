import React from "react";
import '../../Styles/boxCards.css'

function BoxCards({imeges,prase,title}) {


    return (
      <div className="BoxCards">
            <img className="BoxCards__img" src={imeges} alt="alt" />
              <div className="BoxCards-text">
                <h3>{title}</h3>
                <p>{prase}</p>
              </div>
      </div>
    );
  }
  
  export default BoxCards;