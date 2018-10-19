import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  {getMore} from '../store/actionCreators'
import{Link} from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    LodeMore
} from '../style';

class List extends PureComponent {

    render() {
        const { List,Page,clickGetmore } = this.props;
        return (
            <div>
                {
                 List.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')}>
                            <ListItem>
                                    <img className='pic' alt='404' src={item.get('imgurl')}/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LodeMore onClick={()=>clickGetmore(Page)}>加载更多</LodeMore>
            </div>

        )
    }
}
const mapState = (state) => ({
    List:state.home.get('artList'),
    Page:state.home.get('artpage')
})

const mapDispatch = (dispatch) =>({
    clickGetmore(Page){
        dispatch(getMore(Page))
    }
})
export default connect(mapState,mapDispatch)(List);

