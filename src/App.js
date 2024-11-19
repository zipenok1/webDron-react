import React, { useState } from 'react'
import './Styles/app.css'
import Header from './Component/Header';
import Slader from './Component/Slader';
import Goods from './Component/Goods';
import Blog from './Component/Blog';
import Futer from './Component/Futer';
import BoxMenu from './Component/BoxMenu'


function App() {
  
  const [cartOpen, setCartOpen] = useState(false)
  const [cartAitem, setCartAtitem] = useState([])
  
    const onAddPlus = (obj)=>{
      setCartAtitem((prev) => [...prev, obj]);
      
    }
  
    const onRemove = (id) => {
      setCartAtitem((prev) => prev.filter(items => items.id !== id));
    }
  
  return (
    <div className="App">
      <div className='Header__main' >
        <div className='wrap'>
          {cartOpen ? <BoxMenu itm={cartAitem} onCloseCart={()=> {setCartOpen(false); document.body.style.overflow='auto'}}/> : null}
          <Header onClickCart={()=> {setCartOpen(true); document.body.style.overflow='hidden'}}/>
        </div>
            <div>
              <Slader/>
            </div>
       </div>
              <div className='wrap'>
                <Goods onRem={onRemove} onAddFun={onAddPlus}/>
              {/* <Blog/> */}
              </div>
              {/* <Futer/>      */}
    </div>  
  );
}

export default App;
