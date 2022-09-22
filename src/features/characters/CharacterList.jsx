import React, { useCallback,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHouse, SET_CHARACTERS } from './characterSlice';
import axios from 'axios';
import { CharactersData } from '../../CharactersData';
import { Link } from "react-router-dom";

export const CharacterList = () => {
    const characterState = useSelector(state=>state.characters)
    const{characterList,house} = characterState
    const dispatch = useDispatch()

    useEffect(() => {
        const promises = CharactersData.map(async(person)=>
           await axios
            .get(`https://www.anapioficeandfire.com/api/characters/${person.id}`)
            .then((res) => {
                return {...res.data,person}
                
            })
        );
    
        Promise.all(promises).then(res=>{
            dispatch(SET_CHARACTERS(res))
        })   
    }, [])

    const getInfo = (housename)=>{
        dispatch(getHouse({housename:housename}))
    }
    
    
  return (
    <div className='m-auto'>
        <h3 className='text-4xl text-center m-6 title-font text-white'>Game of Thrones</h3>
        <div className='flex flex-row flex-wrap gap-8 justify-center'>
        {
            characterList.map((character,index)=>(
                <div key={index} className='w-40 flex flex-col place-items-center border border-solid border-orange-700 
                bg-white rounded p-4'>
                    <div className='grow '>
                      <img src={character.person.imgurl} alt={character.name} className='w-full h-full m-auto object-cover' />                  
                    </div>
                    <h3 className='text-lg my-1 text-gray-900'> {character.name}</h3>
                    <div className='flex gap-4 mt-auto'>
                      <Link to={`/characters/${character.name}`}>  
                        <button onClick={()=>getInfo(character.person.house)}>Details</button>
                      </Link>
                      <Link to={`/play/${character.name}`}>  
                        <button onClick={()=>getInfo(character.person.house)}>Play</button>
                      </Link>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}
