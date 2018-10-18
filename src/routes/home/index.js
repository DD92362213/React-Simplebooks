import React,{Component} from 'react';
import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import axios from 'axios'
import { connect } from 'react-redux'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    HomeImg
} from './style'

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <HomeImg/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
           const result = res.data.data
           const action={
               type:'change_home',
               artList:result.artList,
               titleList:result.titleList,
               writerList:result.writerList
           }
           this.props.homechange(action)
        })
    }
}

const mapDispatch=(dispatch)=>({
    homechange(action){
        dispatch(action)
    }
});

export default connect(null,mapDispatch)(Home);