import React,{Component} from 'react';
import { connect } from 'react-redux'
import {
    WriterMain,
    WriterItem,
    WriterBottom,
    WriterText
} from '../style'
class Writer extends Component{
    render(){
        const {List} = this.props;
        return(
            <WriterMain>
                <WriterText><div className='left'>推荐作者</div><div className='right'><i ref={(icon)=>{this.spinIcon=icon}} className="iconfont">&#xe851;</i>换一批</div></WriterText>
               {List.map((item)=>
                   {
                    return(<WriterItem key={item.get('id')}>
                   <img className='pic' alt='404' src={item.get('imgurl')} />
                   <div className='title'>{item.get('title')}</div>
                   <div className='msg'>{item.get('msg')}</div>
                  </WriterItem>)}
               )}
            <WriterBottom>
                查看全部>
            </WriterBottom> 
            </WriterMain>
        )
    }
}

const mapState=(state)=>({
    List:state.home.get('writerList')
})

export default connect(mapState)(Writer);