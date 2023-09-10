import {createStore, combineReducers} from 'redux';
import PointReducer from './reducer/pointReducer';

const rootReducer = combineReducers({
  points: PointReducer,
});

export const store = createStore(rootReducer);
