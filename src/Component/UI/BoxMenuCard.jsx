import React from "react";
import '../../Styles/BoxMenuStl/boxMenuCard.css'
function BoxMenuCard ({noDel,imeges,title,prase}) {
    return (

        <div className="BoxMenuCard">
            <div className="BoxMenuCard__box">
                <img src={imeges} alt="" />
                <div className="BoxMenuCard__item">
                    <h3>{title}</h3>
                    <p>{prase}</p>
                    <img
                    onClick={()=>noDel(title)}
                    src="img/icon/deleate.png" 
                    alt="del"/>
                </div>               
            </div>
        </div>
    )
}

export default BoxMenuCard;