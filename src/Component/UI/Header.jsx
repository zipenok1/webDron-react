import React from "react";
import '../../Styles/MainStl/header.css'

function Header({onBoxCart}) {
    return(
        <div className="Header">
            <div className="Header__box">
                <div className="Header__box-logo">
                    <img src="img/logoDron.png" alt="" />
                        <div className="Header__box-text">
                            <h3>Drontec</h3>
                            <p>Магазин лучших дронов</p>
                        </div>
                </div>
                <div className="Header__box-icon">
                    <img src="img/icon/cart.png" alt="c"/>
                    <img 
                    onClick={onBoxCart}
                    height={30}
                    width={30}
                    src="img/icon/bur.png" alt="u"/>
                    
                </div>
            </div>
            <div className="Header__lain"/>
        </div>
    )
}

export default Header;