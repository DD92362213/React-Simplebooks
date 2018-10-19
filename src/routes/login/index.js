import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { set } from './store/actionCreators'
import {
    LoginWrapper,
    LoginBox,
    LoginInput,
    LoginButton
} from './style'

class Login extends PureComponent{
    render(){
        
        return(
            <LoginWrapper> 
                <LoginBox>
                    <LoginInput placeholder='账号' ref={element => { this.myRef = element}}/>
                    <LoginInput placeholder='密码' ref={element => { this.password = element}} type='password'/>
                    <LoginButton onClick={()=>this.props.login(this.account,this.password)}>登录</LoginButton>
                </LoginBox>
            </LoginWrapper>
        )
    }
    componentDidMount(){
     
    }
}

const mapDispatch=(dispatch)=>({
    login(accountElem,passwordElem){
       set()
    }
})
export default connect(null,mapDispatch)(Login);