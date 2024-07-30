import React from 'react'

function Form(props) {

  return (
      <div className='col-span-2 pt-16 ml-10'>
          <h1
              className='text-white text-3xl font-bold'>
              {props.formStructure.title}
          </h1>
          <p
              className='text-gray-200 pb-8 pt-7'>
             {props.formStructure.description} 
          </p>
          <div className='grid grid-cols-2 gap-3'>
                  <div className=''>
                    <input
                        className='h-8 w-96 pl-3'
                        type="text"
                        placeholder={props.formStructure.fields[0]} />
                  </div>
                  <div>
                    <input
                        className='h-8 w-96 pl-3'
                        type="text"
                        placeholder={props.formStructure.fields[1]} /> 
                 </div>
          </div>
          <textarea
              className='mt-3 h-28 w-full pl-3 pt-3'
              name="Message"
              id="Message"
              placeholder={props.formStructure.fields[2]}>
              
          </textarea>
    </div>
  )
}

export default Form