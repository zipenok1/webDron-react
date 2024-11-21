import React, { useState, useEffect } from "react";
import '../Styles/MainStl/main.css'
import Header from "./Ui/Header";
import Cards from "./Ui/Cards";



function Main ({onClickCart}) {

    const [items,setItems] = useState([])

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

        <div className="Main wrap">
            <div className="Main__box">
                <Header onBoxCart={onClickCart}/>
                    <h2 className="Main__card-title">Все товары</h2>
                        <div className="Main__card-box">
                            {items.map((el)=> (
                                <Cards
                                key={el.id}
                                imeges={el.imeges} 
                                title={el.title} 
                                prase={el.prase}
                                />
                            ))}  
                        </div>
            </div>
        </div>
    )
}

export default Main;