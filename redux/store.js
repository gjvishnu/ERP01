import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import formSlice from './slice'

const reducer = combineReducers({
formState : formSlice
})

const store = configureStore({
    reducer
})

export default store;