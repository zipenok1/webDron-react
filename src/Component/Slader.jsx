import React from "react";
import '../Styles/slader.css'
 
function Slader() {
    return (
      <div className="Slader">
        
            <div className="Slader__window">
                <div className="Slader__window-box">
                    <p>Экономьте до 10%</p>
                        <ul className="Slader__windwo-item">
                            <li>до 7% скидка по промокоду!</li>
                            <li className="Slader__windwo-li">до 3% скидка за первую покупку!</li>
                        </ul>
                </div>
                    <divc className="Slader__window-img">
                        <img src='img/sladit.png' alt="#" />
                    </divc>
            </div>
        
      </div>
    );
  }
  
  export default Slader;