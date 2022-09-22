import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { RESET, SET_HOUSENAME, SET_HOUSEWORDS, SET_REGION, SET_RESULTS, SET_TITLE } from './formSlice';
import confetti from "canvas-confetti";
import { Modal } from '../../components/Modal';

export const Form = () => {
  const{name} = useParams()
  const formState = useSelector(state=>state.form)
  const{title,houseName,houseWords,region,userInputs} = formState;
  const characterState = useSelector(state=>state.characters);
  const{characterList,house} = characterState
  const formDispatch = useDispatch()

  const[isModalOpen,setIsModalOpen] = useState(false)
  const[isCorrect,setIsCorrect] = useState(false)

  // get curr character
  const currentCharacter = characterList.find(character=>character.name === name)

  const getResults = (e)=>{
    e.preventDefault()

    if( (currentCharacter.titles.includes(title) || currentCharacter.aliases.includes(title)) &&
    houseName === house.name && houseWords === house.words && region === house.region ){
       formDispatch(SET_RESULTS({title,houseName,houseWords,region}))
      confetti({
        particleCount: 300,
        spread: 150,
        zIndex:0
      });
      setIsCorrect(!isCorrect)
      setIsModalOpen(true)
    }
    else{
      alert("Sorry, but that's a wrong answer");
      formDispatch(RESET())
    }
    
  }

  setTimeout(() => {
    if(isModalOpen){
      setIsModalOpen(false)
      setIsCorrect(!isCorrect)
      formDispatch(RESET())
    }
  }, 3000);

  return (
   !isModalOpen ?( <form onSubmit={getResults} className='w-9/12  my-3 p-2'>
        <div className='flex flex-col my-6 text-grey-700'>
          <label htmlFor="ip-1" className='text-white'>Titles/aliases</label>
          <input id='ip-1' type={'text'} className='border border-gray-500 p-1.5'
          value={title} onChange={(e)=>formDispatch(SET_TITLE(e.target.value))} />
        </div>
        <div className='flex flex-col my-6'>
          <label htmlFor='ip-2' className='text-white'>House</label>
          <input id='ip-2' type={'text'} className='border border-gray-500 p-1.5'
          value={houseName} onChange={(e)=>formDispatch(SET_HOUSENAME(e.target.value))}/>
        </div>
        <div className='flex flex-col my-6'>
          <label htmlFor='ip-3' className='text-white'>House Words</label>
          <input id='ip-3' type={'text'} className='border border-gray-500 p-1.5'
          value={houseWords} onChange={(e)=>formDispatch(SET_HOUSEWORDS(e.target.value))} />
        </div>
        <div className='flex flex-col my-6'>
          <label htmlFor='ip-4' className='text-white'>Region</label>
          <input type={'text'} className='border border-gray-500 p-1.5'
          value={region} onChange={(e)=>formDispatch(SET_REGION(e.target.value))}/>
        </div>
        <button className='w-full bg-orange-400' >submit</button>           
    </form>)
    :(
      <Modal/>
    )
  )
}
