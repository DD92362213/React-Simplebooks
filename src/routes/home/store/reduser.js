import * as constants from "./actionTypes";
import {fromJS} from 'immutable';
const defaultState=fromJS({
artList:[],
titleList:[],
writerList:[]
})

export default (state = defaultState ,action ) =>{
    switch(action.type){
     case constants.HOME_CHANGE:
     return state.merge({
        artList:fromJS(action.artList),
        titleList:fromJS(action.titleList),
        writerList:fromJS(action.writerList)
     })
     default:
     return state;
    }
}