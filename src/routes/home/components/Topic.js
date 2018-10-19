import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from '../style'
class Topic extends PureComponent {
    render() {
        const { List } = this.props;
        return (
            <TopicWrapper>
                {
                    List.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img className='pic' alt='404' src={item.get('imgurl')} />
                            <h3 className='msg'>{item.get('msg')}</h3>
                        </TopicItem>))
                }
            </TopicWrapper>

        )
    }
}
const mapState = (state) => ({
    List: state.home.get('titleList')
})

export default connect(mapState)(Topic);