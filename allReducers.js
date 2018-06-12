import { combineReducers } from 'redux';
import navReducer from './navReducer';
import changeTextReducer from './changeTextReducer';

const allReducers = combineReducers({
	nav:navReducer,
	ct:changeTextReducer,
});

export default allReducers;