import * as constants from "./actionTypes";
import {fromJS} from 'immutable';
const defaultState=fromJS({
artList:[],
artpage:1,
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
     case constants.HOME_ADD:
     return state.merge({
        artList:state.get('artList').concat(action.artList),
        artpage:action.artpage
        
     }) 
    
     default:
     return state;
    }
}