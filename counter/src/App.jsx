import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  //let Counter = 15
  const addValue =()=>{
    //counter= Counter + 1;
    if(count<20)
    setCount(count + 1)
  }
  const removeValue =()=>{
    //counter= Counter - 1;
    if(count>0)
    setCount(count - 1)
  }
  return (
    <>
      <h1>Counter Value:{count}</h1>

      <button
      onClick={addValue}>Add Value{count}</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
