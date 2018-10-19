import styled from 'styled-components'

export const LoginWrapper = styled.div`
    z-index:0;
   position:absolute;
   left:0;
   right:0;
   bottom:0;
   top:56px;
   background:#eee;
`
export const LoginBox = styled.div`
    width: 400px;
    height:180px;
    margin: 100px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
   
`
export const LoginInput = styled.input`
    width: 200px;
    margin:10px auto;
    height:30px;
    line-height:30px;
    padding:0 10px;    
    color:#77;
    display:block;
`
export const LoginButton = styled.div`
    width: 200px;
    margin:20px auto;
    height:30px;
    line-height:30px;
    padding:0 10px;    
    color:#fff;
    display:block;
    background:#3194d0;
    border-radius: 15px;
    text-align:center;
`