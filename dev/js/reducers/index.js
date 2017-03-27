import {combineReducers} from 'redux';
import ActiveState from  './reducer-active-state'

const allReducers = combineReducers({
  activeState: ActiveState
});

export default allReducers;
