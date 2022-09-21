import React, { useCallback,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters, getHouse, SET_CHARACTERS } from './characterSlice';
import axios from 'axios';
import { CharactersData } from '../../CharactersData';

export const CharacterList = () => {
    const characterState = useSelector(state=>state.characters)
    const{characterList,house} = characterState
    const dispatch = useDispatch()



    // const getAllCharacters = useCallback(
    //   () => {
    //     return list.map(id=> dispatch(getCharacters({id:id}))
    //     )
    //   },
    //   [],
    // )

    useEffect(() => {
        // getAllCharacters()
        const promises = CharactersData.map(async(person)=>
           await axios
            .get(`https://www.anapioficeandfire.com/api/characters/${person.id}`)
            .then((res) => {
                return {...res.data,person}
                
            })
        );
        console.log('promises',promises)
    
        Promise.all(promises).then(res=>{
            console.log('resp',res)
            dispatch(SET_CHARACTERS(res))
        })
      console.log('list',characterList)
    
    }, [])

    const getInfo = (housename)=>{
        console.log('hname',housename)
        dispatch(getHouse({housename:housename}))
        console.log('fetched',house)
    }
    
    
  return (
    <div>
        <h3 className='text-2xl'>list</h3>
        <div className='flex flex-row flex-wrap gap-4'>
        {
            characterList.map((character,index)=>(
                <div key={index} className='w-40 border border-solid border-zinc-700 p-4'>
                    <img src={character.person.imgurl} alt={character.name} className='w-10' /> 
                    <h3 className='text-xl'> {character.name}</h3>
                    <div className='flex'>
                        <button onClick={()=>getInfo(character.person.house)}>info</button>
                        <button>play</button>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}
