import React from 'react'

function Contact(props) {
    return (
        <>
    <div className='flex items-center gap-4 text-white pt-5'>
          <img className="h-4" src={props.el.img}/>
          <span>{props.el.title}</span>
    </div>
    <div className='flex justify-start text-white pt-2'>
        <span className='text-gray-200'>{props.el.description}</span>
    </div>
    </>
  )
}

export default Contact