import thunk from 'redux-thunk';
import {applyMiddleware,createStore} from 'redux';
import reducers from '../reducer';
function configureStore()
{
	var store=applyMiddleware(thunk)(createStore)(reducers);
	return store;
}

export default configureStore;

