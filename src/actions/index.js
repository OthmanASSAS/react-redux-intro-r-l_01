import {USER_SELECTED} from './action-types.js'

export const selectUser=(user)=>{
    console.log({user})
    return {
        type:USER_SELECTED,
        payload:user
    }
}
