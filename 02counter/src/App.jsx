
import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCouter]= useState(15)
  
  // let counter = 15

  const addValue = ()=>{
  //  setCouter(counter+1)
  setCouter((precounter=>precounter+1))
  setCouter((precounter=>precounter+1))
  setCouter((precounter=>precounter+1))
  
  }
  const removeValue =()=>{
    setCouter((precounter =>precounter-1))
    setCouter((precounter =>precounter-1))
    setCouter((precounter =>precounter-1))
  }
  return (
    <>
      <h1>This is chaitanya {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
