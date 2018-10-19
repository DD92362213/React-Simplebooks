import axios from 'axios';
import * as constants from "./actionTypes";

export const getDital=(id)=>{
return (dispatch)=>{
    axios.get('/api/detail.json?id='+id).then((res)=>{
        const result=res.data.data;
        const title=result.title;
        const content=result.content;
        const action={
            type:constants.DETIAL_CHANGE,
            title,
            content
        }
        dispatch(action);
    })
  }
}