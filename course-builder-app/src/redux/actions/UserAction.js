import { server } from "../Store";
import axios from "axios"

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({type:"loginRequest"})

        const {data} = await axios.post(`${server}/login`, {email,password},{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true,
        })

        console.log(data)
        dispatch({type:"loginSuccess", payload:data})
    } catch (error) {
        dispatch({type:"loginFail", payload:error.response.data.message})
        
    }
} 
export const getMyProfile = () => async(dispatch) => {
    try {
        dispatch({type:"loginUserRequest"})

        const {data} = await axios.get(`${server}/me`,{
            withCredentials:true,
        })

        console.log(data)
        dispatch({type:"loginUserSuccess", payload:data.user})
    } catch (error) {
        dispatch({type:"loginUserFail", payload:error.response.data.message})
        
    }
} 