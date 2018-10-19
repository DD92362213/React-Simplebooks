import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer';
import home from '../routes/home/store/reduser';
import detail from '../routes/detail/store/reduser';
import login from '../routes/login/store/reduser';

export default combineReducers({
    header:headerReducer,
    home,
    detail,
    login
})