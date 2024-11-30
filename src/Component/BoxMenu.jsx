import React, { useContext, useEffect, useState } from "react";
import '../Styles/BoxMenuStl/boxMenu.css'
import BoxMenuCard from "./Ui/BoxMenuCard";
import { appContext } from "../Context";
function BoxMenu ({onBackCard , aitems=[],delBox}) {

    const [deleat,setDeleat] = useState(true)
    const onClickDel = (title) =>{
        const newItems = items.filter(item => item.title !== title);
        setItems(newItems)    
        delBox(newItems)
    }

    const [items,setItems] = useState(aitems)
    useEffect(()=>{
        if(items.length != 0){
            setDeleat(true);
        }else{setDeleat(false)}   
    },[items])
    
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
                        items.map((obj)=>(
                        <BoxMenuCard
                        key={obj.id}
                        imeges={obj.imeges} 
                        title={obj.title} 
                        prase={obj.prase}
                        noDel={onClickDel}
                        />
                        )) 
                        :
                        <div className="Empty__сart">
                            <img src="img/icon/iconbox.png" alt="empty"/>
                            <h2>Корзина пуста</h2>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxMenu;