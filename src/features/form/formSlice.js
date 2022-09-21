import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'

const initialState = {
    title:'',
    houseName:'',
    houseWords:'',
    userInputs:{},
    isCorrect:false,
    isModalOpen:false
}

export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        SET_TITLE:(state,action)=>{
            state.title = action.payload
            console.log('title',state.title)
        },
        SET_HOUSENAME:(state,action)=>{
            state.houseName = action.payload
            console.log('hname',state.houseName)
        },
        SET_HOUSEWORDS:(state,action)=>{
            state.houseWords = action.payload
            console.log('words',state.houseWords)
        },
        SET_RESULTS:(state,action)=>{
            state.isCorrect = true
            state.userInputs = action.payload
        }
    },
})
export const{SET_TITLE,SET_HOUSENAME,SET_HOUSEWORDS,SET_RESULTS} = formSlice.actions
export default formSlice.reducer