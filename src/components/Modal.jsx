import React from 'react'

export const Modal = () => {
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full scale-110 bg-[#00000080]'>
        <div className='w-20 absolute top-1/2 left-1/2 m-auto bg-white transform-div'>
            <h1 className='text-2xl'>Yayy!! you won</h1>
            <small className='text-xl'>Woohoo!!🥳🎉</small>
        </div>
    </div>
  )
}
