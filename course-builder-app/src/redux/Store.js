import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './reducers/UserReducer'



const store = configureStore({
    reducer:{
        user:userReducer,
    }
})

export default store


export const server = "https://coursebundler-backend-72fi.onrender.com/api/v1"