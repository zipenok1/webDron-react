import React, { useState } from "react";
import '../../Styles/cards.css'
import Buttom from "./Buttom";
import Plus from '../../Images/plus.png'
import Cek from'../../Images/ceking.png'

function Cards({imeges,title, prase}) {

  const [adder, setAdder] = useState(false)

  const onClickPlus = () => {
    setAdder(!adder)
  }

    return (
      <div className="Cards">
            <div className="Cards__box">
                
                  <div>
                    <img className="Cards__img" src={imeges} alt="#"></img>
                    
                    <h3>{title}</h3>
                    <div className="Cards__box-item"> 
                        <Buttom text={prase}></Buttom>
                        <img className="point__img"
                        onClick={onClickPlus} 
                        src={adder ? `${Plus}` : `${Cek}`} 
                        alt="alt" />
                    </div>
                  </div>
                
            </div>
      </div>
    );
  }
  
  export default Cards;