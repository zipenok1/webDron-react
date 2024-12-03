import React, {useLayoutEffect} from "react";
import '../Styles/GreetingsStl/greetings.css'
import GreetingsCard from "./Ui/GreetingsCard";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

function Greetings() {

    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=> {
       gsap.from(".Greetings__box-log",{opacity: 0, x: 500, duration: 1.7, 
        scrollTrigger: {
            trigger: ".Greetings__box-log"
       }})
       gsap.from(".Greetings__box-card",{opacity: 0, x: -500, duration: 1.7, 
        scrollTrigger: {
            trigger: ".Greetings__box-card"
       }})
    },[])

    return (
        <div className="Greetings">
            <div className="wrap">

                <div className="Greetings__box">
                    <div className="Greetings__box-log">
                        <p>The early predecessors of drones are hot air balloons and kites. These aerostatic vehicles were used for a variety of purposes, including entertainment and scientific research.</p>
                        <img className="Greetings__box-img" width={340} src="img/Droncar.png" alt="dron" />
                        <p>Digital technology doesn't appeal to me. My old camera still works fine - why change it? Those who have nothing to say hide behind technology. Aki Kaurismäki born 1957 - Finnish film director</p>
                    </div> 

                    <div className="Greetings__box-card">
                        <GreetingsCard
                        text='ответственность'
                        icon='img/icon2.png'
                        color='rgba(111, 177, 70, 1)'/>
                        <GreetingsCard 
                        text='надожность'
                        icon='img/icon1.png'
                        color='rgba(108, 220, 38, 1)'/>
                        <GreetingsCard
                        text='доступность' 
                        icon='img/icon3.png'
                        color='rgba(164, 249, 112, 1)'/>
                        <GreetingsCard 
                        text='№1' 
                        icon='img/icon4.png'
                        color='rgba(94, 246, 0, 1)'/>  
                    </div>

                </div>

            </div>      
        </div>
    );
}

export default Greetings;