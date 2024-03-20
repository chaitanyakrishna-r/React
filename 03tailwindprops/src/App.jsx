import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name :'chaitanya',
    age:25,
    address:{
      city:'bangalore',
      state:'rajasthan',
      country:'india'
    }
  }
  let newArr=[1,3,5,4,8]
  return (
    <>
     <h1 className="text-3xl bg-green-500 underline"
     >hello</h1>
     <Card username="chaitanya" myArr={newArr}/>
     <Card post=' Staff Engineer, Algolia'/>
     <Card/>
    </>
  )
}

export default App
