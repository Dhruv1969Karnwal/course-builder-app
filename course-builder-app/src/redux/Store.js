import {configureStore} from '@reduxjs/toolkit'
import { profileReducer, userReducer } from './reducers/UserReducer'
import { courseReducer } from './reducers/CourseReducer'



const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer
    }
})

export default store


export const server = "https://coursebundler-backend-72fi.onrender.com/api/v1"