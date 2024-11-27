import React, { useState, useEffect } from 'react'
import Greetings from './component/Greetings';
import './Styles/app.css'
import Main from './component/Main';
import BoxMenu from './component/BoxMenu';

function App() {

  const [cartOpen, setCartOpen] = useState(false)
  const [items,setItems] = useState([])
  const [boxItems,setBoxItems] = useState([])  

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
    <div className="App">
        <Greetings/>
        {cartOpen ? <BoxMenu aitems={boxItems} onBackCard={()=> {setCartOpen(false); document.body.style.overflow='auto'}}/>: null}
        <Main contBox={boxItems} addBox={setBoxItems} aitem={items} onClickCart={()=> {setCartOpen(true); document.body.style.overflow='hidden'}}/>
    </div>
  );
}

export default App;
