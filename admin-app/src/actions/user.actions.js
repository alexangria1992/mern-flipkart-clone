import axios from "axios"
import axiosInstance from "../helpers/axios"
import { authConstants, userConstants } from "./constants"

export const signup = (user) => {
    console.log(user)

    return async (dispatch) => {

        dispatch({type: userConstants.USER_REGISTER_SUCCESS})
        const res = await axios.post(`http://localhost:2000/api/admin/signup`, {
            ...user
        })

        if(res.status === 201){
            const {message} = res.data.admin;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: { message}
            })
        } else {
            if(res.status === 400){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {error: res.data.error}
                })
            }
        }
    }
}