import React, { useState } from "react";
import '../../Styles/MainStl/cards.css'

function Cards ({imeges,title,prase}) {

    const [adder, setAdder] = useState(false)
    const onClickState = () =>{
        setAdder(!adder)
    }

    return (

        <div className="Cards">
            <div className="Cards__box">
                <img className="Cards__box-img" src={imeges} alt="dron" />
                <h3>{title}</h3>
                    <div className="Cards__box-exl">
                        <p>{prase}</p>
                        <img 
                        width={25} 
                        style={{marginTop:12}} 
                        onClick={onClickState}
                        src={adder ? "img/icon/plus.png" : "img/icon/ceking.png"} 
                        alt="ck" />
                    </div>
            </div>
        </div>
    )
}

export default Cards;