import React, { useEffect, useState } from "react";
import '../Styles/goods.css'
import axios from 'axios'
import Cards from "./UI/Cards";
import Title from "./UI/Title";


function Goods() {
  const [cartAitem, setCartAtitem] = useState([])
  const [items, setItems] = useState([])
  
  useEffect(()=>{
    fetch('https://673b5c53339a4ce4451beccc.mockapi.io/items')
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
        setItems(json);
      })
  })

  const onAddPlus = (el)=>{
    setCartAtitem([...cartAitem, el]);
  }

    return (
      <div className="Goods">
        <div className="Goods__title">
            <Title text='Все товары' />
        </div>
        <div className="Goods__cards">
          {items.map((el)=> (
            <Cards 
            imeges={el.imeges} 
            title={el.title} 
            prase={el.prase}
            onPlus={(el) => onAddPlus(el)}
            />
          ))}
            
              
        </div>
      </div>
    );
  }
  
  export default Goods;