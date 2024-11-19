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

 
 
  return (
    <div className="App">
      <div className='Header__main' >
        <div className='wrap'>
          {cartOpen ? <BoxMenu onCloseCart={()=> {setCartOpen(false); document.body.style.overflow='auto'}}/> : null}
          <Header onClickCart={()=> {setCartOpen(true); document.body.style.overflow='hidden'}}/>
        </div>
            <div>
              <Slader/>
            </div>
       </div>
              <div className='wrap'>
                <Goods/>
              {/* <Blog/> */}
              </div>
              {/* <Futer/>      */}
    </div>
  );
}

export default App;
