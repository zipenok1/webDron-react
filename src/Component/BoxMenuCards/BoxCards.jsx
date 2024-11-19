import React from "react";
import '../../Styles/boxCards.css'

function BoxCards({imeges,prase,title}) {


    return (
      <div className="BoxCards">
            <img className="BoxCards__img" src='img/kvadra2.png' alt="alt" />
              <div className="BoxCards-text">
                <h3>Гавнокоптер DJI Mavic 2 Pro</h3>
                <p>18.000</p>
              </div>
      </div>
    );
  }
  
  export default BoxCards;