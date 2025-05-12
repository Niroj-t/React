import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card.jsx' 
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <h1 className='bg-green-500 text-black rounded mb-4'>This is tailwind</h1>
        <Card Username="Niroj Thapa" btnText="Click Me"/>
    </>
  )
}

export default App
