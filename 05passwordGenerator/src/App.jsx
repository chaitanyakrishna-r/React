import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState("10")
  const [NumAllowed, setNumAllowed]= useState(false)
  const [CharAllowed, setCharAllowed] =useState(false)
  const [Password, setPassword]= useState('')
  const [color,setColor]= useState(false)

  const PasswordRef = useRef(null)

  const generatePassword = useCallback(()=>{
  let pass=''
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(NumAllowed) str+="0123456789"
  if(CharAllowed) str+="!@#$%^&*()_+"

  for (let i=1; i<=length;i++){
    let index = Math.floor(Math.random()*str.length)
    pass += str.charAt(index)
  }
  setPassword(pass)

},[length,NumAllowed, CharAllowed])


useEffect(()=>{
  generatePassword()
},[length,NumAllowed,CharAllowed])

const copyPasswordToClipBoard =()=>{
  window.navigator.clipboard.writeText(Password)
  setColor(ture)
  PasswordRef.current?.select()
  
}



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={PasswordRef}
            />
            <button 
            onClick={copyPasswordToClipBoard}
            className='outline-none text-white bg-blue-500 px-3 py-0.5 shrink-0'>{color?"copied":"copy"}
            </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input 
                type="range" 
                min={6} 
                max={30} 
                value={length} 
                className='cursor-pointer'
                onChange={(e)=>setLength(e.target.value)}
                />
                <label htmlFor="length">Lenght: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox" 
                defaultChecked={NumAllowed}
                onChange={()=>{
                  setNumAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="number">Number</label>
            </div>    
            <div className='flex items-center gap-x-1'>
               <input 
               type="checkbox" 
               defaultChecked={CharAllowed}
               onChange={()=>{
                setCharAllowed((prev)=>!prev)
               }}
               
               />
                <label htmlFor="character">Symbols</label>
            </div>    
          </div>
            
      </div>
    </>
  )
}

export default App
