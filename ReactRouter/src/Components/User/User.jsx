import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {Userid} = useParams()
  return (
    <div className='bg-gray-400 p-4 text-3xl'>
      User:{Userid}
    </div>
  )
}

export default User
