import React,{Component} from 'react';
import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'

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
}

export default Home;