import * as constants from "./actionTypes";
import axios from 'axios';
import {fromJS} from 'immutable';

const changehome=(result)=>({
    type:constants.HOME_CHANGE,
    artList:result.artList,
    titleList:result.titleList,
    writerList:result.writerList
})
const addhome=(result,newpage)=>({
    type:constants.HOME_ADD,
    artList:fromJS(result.artList),
    artpage:newpage
})

export const getMore = (page)=>{
    return(dispatch)=>{
        axios.get('/api/homelist.json?page='+page).then((res)=>{
            const result = res.data
            const action=addhome(result,page+1)
            dispatch(action);
         })  
    }
}
export const getHomInfo = ()=>{
    return(dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data
            const action=changehome(result)
            dispatch(action);
         })  
    }
}