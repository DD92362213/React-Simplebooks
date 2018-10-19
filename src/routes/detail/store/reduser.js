import * as constants from "./actionTypes";
import {fromJS} from 'immutable';
const defaultState=fromJS({
    title:'',
    content:''  
})

export default (state = defaultState ,action ) =>{
    switch(action.type){
    case constants.DETIAL_CHANGE:
    return state.merge({
        title:action.title,
        content:action.content
     })
    default:
    return state
    }
}
