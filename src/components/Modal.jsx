import React from 'react'

export const Modal = () => {
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full scale-110 bg-[#00000080]'>
        <div className='w-80 absolute top-1/2 left-1/2 m-auto bg-white transform-div'>
            <h1 className='text-xl my-1 text-gray-900'>Yayy!! you won, you are a true thronie⚔️</h1>
            <small className='text-lg text-center my-1 text-orange-600'>Woohoo!!🥳🎉</small>
        </div>
    </div>
  )
}
