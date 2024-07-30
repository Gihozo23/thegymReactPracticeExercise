import React from 'react'

function Form(props) {

  return (
      <div className='col-span-2 pt-16  pl-10'>
          <h1 className='text-white text-3xl font-bold'>{props.formStructure.title}</h1>
          <p className='text-gray-200 pb-8 pt-7'>
             {props.formStructure.description} 
          </p>
          <div className='grid grid-cols-2'>
                  <div className=''>
                      <input className='h-8 w-5/6' type="text" placeholder={props.formStructure.fields[0]} />
                  </div>
                  <div>
                      <input className='h-8 w-5/6' type="text"placeholder={props.formStructure.fields[1]} /> <br />
              </div>
          </div>
          
        
    </div>
  )
}

export default Form