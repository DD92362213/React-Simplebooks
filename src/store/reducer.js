import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer';
import home from '../routes/home/store/reduser';

export default combineReducers({
    header:headerReducer,
    home
})