import React from "react";
import '../Styles/BoxMenuStl/boxMenu.css'

function BoxMenu ({onBackCard}) {
    return (

        <div className="BoxMenu">
            <div className="Overley">
                <div className="Shadow">
                    <div className="BoxMenu__title">
                        <h3>Корзина</h3>
                        <button onClick={onBackCard}>Назад</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BoxMenu;