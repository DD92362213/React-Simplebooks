import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoCg,
  SearchInfoItem
} from './style'

class Header extends Component {
  getListitem(){
    const { isfocus, list , page,totalpage,ismousin,handleMouseEnter,handleMouseLeave,handleClick } = this.props;
    const pagelist=[];
    const jslist= list.toJS();
    for(let i=(page-1)*10;i<page*10;i++){
      pagelist.push(
        <SearchInfoItem key={i}>{jslist[i]}</SearchInfoItem>
      )
    }
    if (isfocus||ismousin) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
          <SearchInfoTitle>
            热门搜索
          <SearchInfoCg onClick={()=>handleClick(page,totalpage,this.spinIcon)}>
          <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
              换一批
          </SearchInfoCg>
          </SearchInfoTitle>
          {
            pagelist
          }
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render() {
    const { isfocus, handleInputBlur, handleInputFocus,list } = this.props;
    return (
      <div>
        <HeaderWrapper><Logo />
          <Nav>
            <NavItem className='left act'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavSearchWrapper>
              <CSSTransition
                in={isfocus}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={isfocus ? 'focus' : ''}
                  onFocus={()=>handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={isfocus ? 'focus iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
              {this.getListitem()}
            </NavSearchWrapper>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          </Nav>
          <Addition>
            <Button className='write'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
            <Button className='regs'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isfocus: state.header.get('isfocus'),
    list: state.header.get('list'),
    page:state.header.get('page'),
    totalpage:state.header.get('totalpage'),
    ismousin:state.header.get('ismousin')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      
     (list.size===0)&&dispatch(actionCreators.getList());
      dispatch(actionCreators.SearchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.SearchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.MouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.MouseLeave());
    },
    handleClick(page,totalpage,spin){
      console.log(spin)
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        originAngle = parseInt(originAngle,10)
      }else{
        originAngle = 0;
      }
      spin.style.transform='rotate('+(originAngle+360)+'deg)';
      if(page<totalpage){
        dispatch(actionCreators.Click(page+1));
      }else{
        dispatch(actionCreators.Click(1));
      }
    }
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);
