import React, { useEffect, useState } from "react";
import '../Styles/goods.css'
import axios from 'axios'
import Cards from "./UI/Cards";
import Title from "./UI/Title";


function Goods() {

  const [items, setItems] = useState([])
  
  useEffect(()=>{
    axios.get('https://673b5c53339a4ce4451beccc.mockapi.io/items')

    .then((response)=>{
      setItems(response.items.results);
    })
  })


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
            prase={el.prase}>
            </Cards>
          ))}
            
              
        </div>
      </div>
    );
  }
  
  export default Goods;