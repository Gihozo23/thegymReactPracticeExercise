import React from 'react'

function SocialMedia(props) {
  return (
    <div className='pt-16 border-1'>
        <div>
        <img className='h-7 text-white' src={props.socialMedia[0]} alt="" />
        <div className='border-2 border-white rounded-full w-12 h-12 flex justify-center items-center'>
        <img src={props.img} alt="" className='w-4'/>
    </div>
        </div>
    </div>
  )
}

export default SocialMedia