import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {getDital} from './store/actionCreators'
import {
    DetailWrapper,
    DetailTitle,
    Content
} from './style'

class Detail extends PureComponent{
    render(){
        const {title,content}=this.props
        return(
            <DetailWrapper>
                <DetailTitle>{title}</DetailTitle>
                <Content dangerouslySetInnerHTML={{__html:content}}/>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDatail(this.props.match.params.id)
    }
}
const mapState=(state)=>({
    title:state.detail.get('title'),
    content:state.detail.get('content')
});
const mapDispatch=(dispatch)=>({
    getDatail(id){
        dispatch(getDital(id))
    }
})
export default connect(mapState,mapDispatch)(Detail);