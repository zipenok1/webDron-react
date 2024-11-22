import React, { useState, useEffect, useLayoutEffect } from "react";
import '../Styles/MainStl/main.css'
import Header from "./Ui/Header";
import Cards from "./Ui/Cards";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

function Main ({onClickCart}) {

    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=> {
       gsap.from(".Main__box",{opacity: 0, duration: 2, 
        scrollTrigger: {
            trigger: ".Main__box"
       }})
    },[])

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