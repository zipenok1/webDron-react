import React, { useState } from "react";
import Dron from '../Images/dron.png'
import Cart from '../Images/cart.png'
import User from '../Images/use.png'
import '../Styles/header.css'

function Header({onClickCart}) {
    
    return (
      <div className="Header">
        <div className="Header__logo">
            <p>ДронТек</p>
            <img src={Dron} alt="1"/>
        </div>
        <div className="Header__icon">
            <img className="icon" src={Cart} alt="2" />
            <img 
            onClick={onClickCart} 
            className="icon" 
            src={User}  
            alt="3" />
            
        </div>
      </div>
    );
  }
  
  export default Header;