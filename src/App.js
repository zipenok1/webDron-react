import React, { useState } from 'react'
import Greetings from './component/Greetings';
import './Styles/app.css'
import Main from './component/Main';
import BoxMenu from './component/BoxMenu';

function App() {

  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="App">
        <Greetings/>
        {cartOpen ? <BoxMenu onBackCard={()=> {setCartOpen(false); document.body.style.overflow='auto'}}/>: null}
        <Main onClickCart={()=> {setCartOpen(true); document.body.style.overflow='hidden'}}/>
    </div>
  );
}

export default App;
