import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('skyblue')

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center top-20 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button 
        onClick={()=>setColor("red")}
        className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-red-300'
        >red</button>
        <button 
        onClick={()=>setColor("green")}
        className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-green-100'
        >green</button>
        <button 
        onClick={()=>setColor("blue")}
        className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-blue-300'
        >blue</button>
        <button 
        onClick={()=>setColor("black")}
        className='outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-black'
        >black</button>
        <button 
        onClick={()=>setColor("white")}
        className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-white-300'
        >white</button>

      </div>
    </div>
   </div>
  )
}

export default App
