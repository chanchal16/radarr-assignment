import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { SET_HOUSENAME, SET_HOUSEWORDS, SET_RESULTS, SET_TITLE } from './formSlice';
import confetti from "canvas-confetti";
import { Modal } from '../../components/Modal';

export const Form = () => {
  const{name} = useParams()
  const formState = useSelector(state=>state.form)
  const{title,houseName,houseWords,userInputs,isCorrect} = formState;
  const characterState = useSelector(state=>state.characters);
  const{characterList,house} = characterState
  // console.log('housename',house.name)
  const formDispatch = useDispatch()

  const[isModalOpen,setIsModalOpen] = useState(false)

  // get curr character
  const currentCharacter = characterList.find(character=>character.name === name)
  // console.log('current',currentCharacter)

  const getResults = (e)=>{
    e.preventDefault()

    if( (currentCharacter.titles.includes(title) || currentCharacter.aliases.includes(title)) &&
    houseName === house.name && houseWords === house.words){
      console.log('yayy!! u won')
       formDispatch(SET_RESULTS({title,houseName,houseWords}))
      confetti({
        particleCount: 300,
        spread: 150,
        zIndex:0
      });
      setIsModalOpen(true)
    }
    // console.log('check-title', currentCharacter.titles.includes(title) || currentCharacter.aliases.includes(title))
    // console.log('check-house',houseName === house.name)
    // console.log('check-words',houseWords === house.words)

    console.log('user',userInputs)
    
  }

  setTimeout(() => {
    if(isModalOpen){
      setIsModalOpen(false)
    }
  }, 3000);

  return (
   !isModalOpen ?( <form onSubmit={getResults}>
        <label htmlFor="ip-1">titles/aliases</label>
        <input id='ip-1' type={'text'} className='border border-gray-500'
        value={title} onChange={(e)=>formDispatch(SET_TITLE(e.target.value))} />
        <label htmlFor='ip-2'>House</label>
        <input id='ip-2' type={'text'} className='border border-gray-500'
        value={houseName} onChange={(e)=>formDispatch(SET_HOUSENAME(e.target.value))}/>
        <label htmlFor='ip-3'>House Words</label>
        <input id='ip-3' type={'text'} className='border border-gray-500'
        value={houseWords} onChange={(e)=>formDispatch(SET_HOUSEWORDS(e.target.value))} />
        <button >submit</button>           
    </form>)
    :(
      <Modal/>
    )
  )
}
