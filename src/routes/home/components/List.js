import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    ListItem,

    ListInfo
} from '../style'
class List extends Component {

    render() {
        const { List } = this.props;
        return (
            <div>
                {
                 List.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className='pic' alt='404' src={item.get('imgurl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>

        )
    }
}
const mapState = (state) => ({
    List:state.home.get('artList')
})


export default connect(mapState)(List);

