import React from 'react'

function Button (props) {
  return (
    <div className='border-2 border-white rounded-full w-12 h-12 flex justify-center items-center'>
        <img src={props.} alt="" className='w-4'/>
    </div>

  )
}

export default Button