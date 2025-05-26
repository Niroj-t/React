import { useState , useCallback , useEffect, useRef} from 'react'
import "./App.css";


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null);
  const passwoedGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`"

    for(let i=0; i< length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed,charAllowed,setPassword])
  
  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])
  

  useEffect(() => {
    passwoedGenerator()
  }, [length, numberAllowed, passwoedGenerator])
  return (
    <>
    <div className='w-screen max-w-screen-md mx-auto shadow-md rounded-lg px-2 my-5 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-20 my-5'>
     <input
     type='text'
     value={password}
     className='outline-none w-full py-4 px-8 bg-white'
     placeholder='password'
     readOnly
     ref={passwordRef}
     />
     <button
     onClick={copyPasswordToClip}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
     >Copy</button>
    </div>
    <div className='flex text-sm gap-x-1'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() =>{
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor='numberInput'>Numbres</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() =>{
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor='characterInput'>Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
