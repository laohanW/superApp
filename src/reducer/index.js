import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
const reducers= combineReducers({
	"Home":HomeReducer
});
export default reducers;
