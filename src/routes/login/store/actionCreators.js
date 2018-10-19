import axios from 'axios';
import * as constants from "./actionTypes";

export const set=(accout,password)=>{
return (dispatch)=>{
    axios.get('/api/login.json?accout='+accout+'&password='+password).then((res)=>{
       const result=res.data.data;
       if(result){
        const action = {
            type:constants.IS_LOGIN,
            islogin:true
        }
        dispatch(action)
       }else{
           return
       }
    })
  }
}