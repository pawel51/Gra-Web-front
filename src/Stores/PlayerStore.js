import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../Slices/characterSlice.js'

export default configureStore({
    reducer: {
        character: characterReducer
    },
})