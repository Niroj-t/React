import React from 'react'

function Card({Username,btnText}) {
    console.log(Username)
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://cdn.pixabay.com/photo/2025/03/11/09/51/woman-9461838_1280.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {Username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Peace Mind</h2>
        </div>
        <p className="text-gray-300">
         Peace of mind” is a state of mental and emotional calmness, where you're free 
         from worry, stress, and fear
        </p><br/>
        <div className="mb-4">
           <button>btnText</button>
        </div>
      </div>
        
      
  )
}

export default Card
