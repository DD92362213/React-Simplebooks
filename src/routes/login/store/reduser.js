import * as constants from "./actionTypes";
import {fromJS} from 'immutable';
const defaultState=fromJS({
    islogin:false
})

export default (state = defaultState ,action ) =>{
    switch(action.type){
    case constants.IS_LOGIN:
    return state.set('islogin',action.islogin)
    default:
    return state
    }
}
