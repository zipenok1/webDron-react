import React, { useState, useLayoutEffect } from "react";
import '../Styles/MainStl/main.css'
import Header from "./Ui/Header";
import Cards from "./Ui/Cards";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

function Main ({onClickCart ,aitem,addBox,contBox}) {

    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=> {
       gsap.from(".Main__box",{opacity: 0, duration: 2, 
        scrollTrigger: {
            trigger: ".Main__box"
       }})
    },[])
    
    const onAddPlus = (obj)=>{
        addBox(prev=>{
            const checker = prev.some(aitem => JSON.stringify(aitem)===JSON.stringify(obj))
            if (!checker){
                return [...prev, obj]
            }
            if (checker) {
                return prev.filter(aitem => JSON.stringify(aitem) !== JSON.stringify(obj));
            }
            return prev
        });
    }
    
    // console.log(contBox);
    return (

        <div className="Main wrap">
            <div className="Main__box">
                <Header onBoxCart={onClickCart}/>
                    <h2 className="Main__card-title">Все товары</h2>
                        <div className="Main__card-box">
                            {aitem.map((el)=> (
                                <Cards
                                key={el.id}
                                imeges={el.imeges} 
                                title={el.title} 
                                prase={el.prase}
                                onPlus={onAddPlus}
                                conBox={contBox}
                                />
                            ))}  
                        </div>
            </div>
        </div>
    )
}

export default Main;