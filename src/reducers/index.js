/**
 * Created by rakeshuvsn on 3/8/18.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
