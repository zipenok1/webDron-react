import React, { useState } from "react";
import '../Styles/boxMenu.css'
import Title from "./UI/Title";
import BoxCards from "./BoxMenuCards/BoxCards";
function BoxMenu({onCloseCart, itm=[]}) {

    
  
    return (
      <div className="BoxMenu">
          <div className='overley'>
          <div className='shadow'>
            <div className="BoxMenu__title">
              <Title text='Корзина' />
              <button
              onClick={onCloseCart}
              className="BoxMenu__btm">Назад</button>
            </div>
              <div className="BoxMenu__aitem">
                 {itm.map((el)=>(
                   <BoxCards
                    key={el.id}
                    imeges={el.imeges} 
                    title={el.title} 
                    prase={el.prase}/>
                 ))}
              </div>
          </div>
          </div> 
      </div>
    );
  }
  
  export default BoxMenu;