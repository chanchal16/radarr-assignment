import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import { data } from 'autoprefixer';
import axios from 'axios';

const initialState = {
    characterList: [],
    status:'idle',
    house:{}
}


export const getCharacters = createAsyncThunk("characters/getCharacters",async({id})=>{
    try{
        
       const {data}= await axios.get(`https://www.anapioficeandfire.com/api/characters/${id}` )
        console.log('data',data)
        return data
        
        
    }catch(err){console.error(err)}
})

export const getHouse = createAsyncThunk('characters/getHouse',async({housename})=>{
    let query =  `name=House Tyrell of Highgarden`
    try{
        const {data} = await axios.get(`https://www.anapioficeandfire.com/api/houses?name=${housename}` )
        console.log('house-data',data)
        return data
    }catch(err){console.error(err)}
})

export const characterSlice = createSlice({
    name:'characters',
    initialState,
    reducers:{
        SET_CHARACTERS:(state,action)=>{
            state.characterList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCharacters.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getCharacters.fulfilled,(state,action)=>{
            state.status = 'fulfilled';
            state.characterList= action.payload
        })
        .addCase(getHouse.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getHouse.fulfilled,(state,action)=>{
            state.status = 'fulfilled',
            state.house =  action.payload
        })
    }
})

export const {SET_CHARACTERS} = characterSlice.actions
export default characterSlice.reducer