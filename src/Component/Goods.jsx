import React, { useEffect, useState } from "react";
import '../Styles/goods.css'
import axios from 'axios'
import Cards from "./UI/Cards";
import Title from "./UI/Title";


function Goods({onAddFun,onRem}) {

  const [items, setItems] = useState([]) 

  useEffect(()=>{
    fetch('https://673b5c53339a4ce4451beccc.mockapi.io/items')
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
        setItems(json);
      })
  },[])

    return (
      <div className="Goods">
        <div className="Goods__title">
            <Title text='Все товары' />
        </div>
        <div className="Goods__cards">
          {items.map((el)=> (
            <Cards 
            key={el.id}
            imeges={el.imeges} 
            title={el.title} 
            prase={el.prase}
            onPlus={(obj) => onAddFun(obj)}
            onRe={onRem}
            />
          ))}            
        </div>
      </div>
    );
  }
  
  export default Goods;