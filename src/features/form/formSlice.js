import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title:'',
    houseName:'',
    houseWords:'',
    region:'',
    userInputs:{},
}

export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        SET_TITLE:(state,action)=>{
            state.title = action.payload
        },
        SET_HOUSENAME:(state,action)=>{
            state.houseName = action.payload
        },
        SET_HOUSEWORDS:(state,action)=>{
            state.houseWords = action.payload
        },
        SET_REGION:(state,action)=>{
            state.region = action.payload
        },
        SET_RESULTS:(state,action)=>{
            state.userInputs = action.payload
        },
        RESET:(state)=>{
            state.title = '';
            state.houseName = '';
            state.houseWords = '';
            state.region = ''
        }
    },
})
export const{SET_TITLE,SET_HOUSENAME,SET_HOUSEWORDS,SET_REGION,SET_RESULTS,RESET} = formSlice.actions
export default formSlice.reducer