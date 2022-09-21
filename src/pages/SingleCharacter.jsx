import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { HousesChart } from '../components/HousesChart';
import { SeasonChart } from '../components/SeasonChart';

export const SingleCharacter = () => {
    const {cname} = useParams();
    console.log('ID',cname)
    const characterState = useSelector(state=>state.characters)
    const{characterList,house} = characterState
    console.log('clist',characterList)

    // get curr character
    const currCharacter = characterList.find(character=>character.name === cname)
    console.log('curr',currCharacter)
  return (
    <section>
        <h1 className='text-2xl'>hello</h1>
        <div className='flex justify-between p-4 my-6'>
            <div className='w-24 border border-gray-500 m-4'>
            <img src={currCharacter.person.imgurl} alt={currCharacter.name} 
            className=''/>
            </div>
            <div className='m-4'>
                <h2>Name: {currCharacter?.name}</h2>
                <h3>Titles hold: {currCharacter?.titles?.join(',')}</h3>
                <p>House: {house?.name}</p>
                <p>Region: {house?.region}</p>
                <h4>Word: {house?.words}</h4>
                <h5>Coat of Arms: {house?.coatOfArms}</h5>
                <p>Seats hold: {house?.seats?.join(', ')}</p>
            </div>
        </div>
        {/* charts */}
        <div className='flex justify-between gap-4'>
            <SeasonChart currCharacter={currCharacter} />
            <HousesChart currCharacter={currCharacter} /> 
        </div>
    </section>
  )
}
