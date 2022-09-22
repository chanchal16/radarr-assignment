import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { HousesChart } from '../components/HousesChart';
import { SeasonChart } from '../components/SeasonChart';

export const SingleCharacter = () => {
    const {cname} = useParams();
    const navigate = useNavigate()
    const characterState = useSelector(state=>state.characters)
    const{characterList,house} = characterState

    // get curr character
    const currCharacter = characterList.find(character=>character.name === cname)

  return (
    <section>
        <button className="bg-orange-400 text-white p-1 rounded hover:bg-orange-500 " onClick={()=> navigate(-1)}>
         Back
        </button> 
        <h1 className='text-3xl text-white'>Character Details</h1>
        <div className='flex gap-x-8 p-4 my-6'>
            <div className='flex '>
                <img src={currCharacter.person.imgurl} alt={currCharacter.name} 
                className='object-cover w-48 h-48 grow'/>
            </div>
            <div className=' flex flex-col gap-3 divide-y divide-y-orange-500'>
                <h2 className='text-3xl  text-zinc-400 '>Name:
                <span className='text-orange-300'> {currCharacter?.name}</span></h2>

                <h3 className='text-xl text-zinc-400'>Titles hold:
                <span className='text-orange-300'> {currCharacter?.titles?.join(',')}</span></h3>

                <p className='text-xl text-zinc-400'>
                House: <span className='text-orange-300'>{house?.name}</span> </p>

                <p className='text-lg text-zinc-400'>
                Region: <span className='text-orange-300'> {house?.region}</span></p>

                <h4 className='text-lg text-zinc-400'>House Words:
                <span className='text-orange-300'> {house?.words !== ''? house?.words : 'N/A'}</span></h4>

                <p className='text-lg text-zinc-400'>Coat of Arms:
                <span className='text-orange-300'> {house?.coatOfArms}</span></p>

                <p className='text-lg text-zinc-400'>Seats hold:
                <span className='text-orange-300'> {house?.seats?.length > 0 ?( house?.seats?.join(', ')):'na'}</span></p>
            </div>
        </div>
        {/* charts */}
        <div className='flex gap-48 p-6'>
            <SeasonChart currCharacter={currCharacter} />
            <HousesChart currCharacter={currCharacter} /> 
        </div>
    </section>
  )
}
