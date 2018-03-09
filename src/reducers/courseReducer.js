/**
 * Created by rakeshuvsn on 3/8/18.
 */
import * as types from './../actions/actionTypes';
export default function courseReducer(state = [], action) {
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;


    default:
      return state;
  }
}
