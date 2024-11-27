import React from "react";
import '../../Styles/GreetingsStl/greetingsCard.css'
function GreetingsCard({color, icon}) {

   

    return (
        <div className="GreetingsCard">
              <div className="GreetingsCard__box" style={{backgroundColor:color}}>
                    <img  width={22} src={icon} alt="icon" />
              </div>
        </div>
    );
}

export default GreetingsCard;