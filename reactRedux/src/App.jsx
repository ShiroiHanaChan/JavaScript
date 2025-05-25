import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropDrilling from "./context/PropDrilling.jsx";
import ContextAPI from "./context/ContextAPI.jsx";
import Chat from "./rtk/features/chat/components/Chat.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Context API</h1>
        <hr/>
        <PropDrilling />
        <hr/>
        <ContextAPI />
        <hr/>
        <Chat />
    </>
  )
}

export default App
