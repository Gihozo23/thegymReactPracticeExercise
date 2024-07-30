import React from 'react'

function Form(props) {
  return (
      <div className='col-span-2 pt-16'>
          <h1 className='text-white text-3xl font-bold'>{props.title}</h1>
          <p className='text-gray-200 pt-5 pb-8'>
             {props.description} 
          </p>
          <div className='grid grid-cols-2 grid-rows-5'>
              <div className='col-span-1 row-span-1'>
                  <div className='flex'>
                      <input type="text" placeholder={props.fields[0]} />
                      <input type="text"placeholder={props.field[1]} />
                  </div>
              </div>
              <div className='row-span-4'>
                  <input type="text" placeholder={props.fields[2]} />
              </div>
        </div>
    </div>
  )
}

export default Form