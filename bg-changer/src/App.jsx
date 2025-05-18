import { useState, useEffect } from "react"

function App() {
  // Load color from localStorage or use default "olive"
  const [color, setColor] = useState(()=>{
    return localStorage.getItem("bgColor");
  });
  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);
  return (
    <>
      <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
      >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-olive rounded-3xl">
            <button
            onClick={()=>setColor("red")}
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={()=>setColor("blue")}
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={()=>setColor("purple")}
            style={{backgroundColor: "purple"}}
            >Purple</button>
            <button
            onClick={()=>setColor("green")}
            style={{backgroundColor: "green"}}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
