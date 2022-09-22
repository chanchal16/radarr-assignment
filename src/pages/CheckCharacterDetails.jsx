import React from 'react'
import { useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import { Form } from '../features/form/Form'

export const CheckCharacterDetails = () => {
  const {name} = useParams()
  const navigate = useNavigate()
  const characterState = useSelector(state=>state.characters)
  const{characterList,house} = characterState;

  const currentCharacter = characterList.find(character=>character.name === name);

  return (
    <div className='w-full mt-10'> 
      <button className="bg-orange-400 text-white p-1 rounded hover:bg-orange-500 ml-8 mb-4 " onClick={()=> navigate(-1)}>
         Back
      </button>   
      <div className='w-9/12 m-auto border border-orange-400 p-8 flex flex-col place-items-center text-white'>
        <h1 className='text-2xl p-1 m-4 '>Check how well you know your Favorite Character</h1>
        <div className='flex flex-col place-items-center'>
          <img src={currentCharacter.person.imgurl} alt={currentCharacter.name} className='w-20 h-20 border border-gray-50'/>
          <p className='text-base p-2 text-center'>{currentCharacter.name}</p>
        </div>
        <Form/> 
      </div>
       
    </div>
  )
}
