import * as constants from "./actionTypes";
import axios from 'axios';

const changehome=(result)=>({
    type:constants.HOME_CHANGE,
    artList:result.artList,
    titleList:result.titleList,
    writerList:result.writerList
})



export const getHomInfo = ()=>{
    return(dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data
            const action=changehome(result)
            dispatch(action);
         })  
    }
}