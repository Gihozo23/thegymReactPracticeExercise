import React from 'react'

function Form(props) {

  return (
      <div className='col-span-2 pt-16'>
          <h1 className='text-white text-3xl font-bold'>{props.formStructure.title}</h1>
          <p className='text-gray-200 pb-8 pt-7'>
             {props.formStructure.description} 
          </p>
          <div className='grid grid-cols-2 grid-rows-5'>
              <div className='col-span-1 row-span-2'>
                  <div className='flex pt-2'>
                      <input className='' type="text" placeholder={props.formStructure.fields[0]} />
                      <input type="text"placeholder={props.formStructure.fields[1]} /> <br />
                  </div>
              </div>
              <div className='row-span-4 col-span-1'>
                  <input type="text" placeholder={props.formStructure.fields[2]} />
              </div>
        </div>
    </div>
  )
}

export default Form