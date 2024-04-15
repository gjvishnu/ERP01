import {createSlice} from '@reduxjs/toolkit'


const fromSlice = createSlice({
    name : 'formSlice',
    initialState : {
        loading : false,
        
    },
    reducers:{

        fromDatasucc(state ,action){
          return{
            
            loading : true,
            dataR : action.payload
          }
        }
    }
})

const {reducer , actions} = fromSlice
export const {fromDataHoldreq , fromDatasucc} = actions
export default reducer