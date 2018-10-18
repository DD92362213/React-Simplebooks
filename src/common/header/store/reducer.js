import * as constants from "./actionTypes";
import {fromJS} from 'immutable';
const defaultState=fromJS({
    isfocus:false,
    list:[],
    page:1,
    totalpage:0,
    ismousin:false
})

export default (state = defaultState ,action ) =>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('isfocus',true)
        case constants.SEARCH_BlUR:
            return state.set('isfocus',false)
        case constants.CHANGE_LIST:
            return state.merge({'list':action.data,'totalpage':action.totalpage});
        case constants.MOUSE_ENTER:
            return state.set('ismousin',true)
        case constants.MOUSE_LEAVE:
            return state.set('ismousin',false)
        case constants.CLICK:
            return state.set('page',action.page)
        default:
            return state;
    }
}