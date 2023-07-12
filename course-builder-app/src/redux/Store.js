import {configureStore} from '@reduxjs/toolkit'
import { profileReducer, userReducer } from './reducers/UserReducer'



const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer
    }
})

export default store


export const server = "https://coursebundler-backend-72fi.onrender.com/api/v1"