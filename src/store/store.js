import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/characters/characterSlice';
import formReducer from '../features/form/formSlice';

export const store = configureStore({
    reducer: {
      characters:characterReducer,
      form:formReducer
    },
})