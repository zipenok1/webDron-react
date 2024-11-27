import React, { useState } from "react";
import '../Styles/BoxMenuStl/boxMenu.css'
import BoxMenuCard from "./Ui/BoxMenuCard";

function BoxMenu ({onBackCard , aitems=[]}) {

    const [deleat,setDeleat] = useState(true)
    const onClickDel = () =>{
        setDeleat(false)
    }
   

    return (

        <div className="BoxMenu">
            <div className="Overley">
                <div className="Shadow">
                    <div className="BoxMenu__title">
                        <h3>Корзина</h3>
                        <button onClick={onBackCard}>Назад</button>
                    </div>
                    <div className="BoxMenu__item">
                        {deleat ? 
                        aitems.map((obj)=>(
                        <BoxMenuCard
                        key={obj.id}
                        imeges={obj.imeges} 
                        title={obj.title} 
                        prase={obj.prase}
                        noDel={onClickDel}/>
                        )) 
                        : setDeleat
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxMenu;