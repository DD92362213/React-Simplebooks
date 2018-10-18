import * as constants from "./actionTypes";
import axios from 'axios';
import {fromJS} from 'immutable'

const changeList = (data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalpage:Math.ceil(data.length/10)
})
export const Click=(page)=>({
    type:constants.CLICK,
    page
})
export const MouseLeave = ()=>({
    type:constants.MOUSE_LEAVE
})

export const MouseEnter = ()=>({
    type:constants.MOUSE_ENTER
})

export const SearchFocus = ()=>({
    type:constants.SEARCH_FOCUS
})
export const SearchBlur = ()=>({
    type:constants.SEARCH_BlUR
})
export const getList = ()=>{
    return(dispatch)=>{
        axios.get('/api/headerlist.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch((err)=>{
            console.log(err);
        })
        }
}