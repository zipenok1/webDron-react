import React, { useState } from "react";
import '../../Styles/MainStl/cards.css'

function Cards ({key,imeges,title,prase,onPlus}) {

    const [adder, setAdder] = useState(false)
    const onClickState = () =>{
        setAdder(!adder)
        onPlus({key,imeges,title,prase})
        
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
                        onClick={adder ? null : onClickState } 
                        src={adder ? "img/icon/plus.png" : "img/icon/ceking.png"} 
                        alt="ck" />
                    </div>
            </div>
        </div>
    )
}

export default Cards;