import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo =(todo)=>{
      setTodos((prev)=>[{id:Date.now(),...todo} ,prev])
  }


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 className='underline'>Hello</h1>
    </TodoProvider>
  )
}

export default App
