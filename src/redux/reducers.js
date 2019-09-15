import { combineReducers } from 'redux';
import {
  SAVE_USER,
  REMOVE_USER,
} from './action-types';

function user(prev = {}, action) {
  switch (action.type) {
    case SAVE_USER:
      return action.data;
    case REMOVE_USER:
      return {};
    default:
      return prev
  }
}


export default combineReducers({
  user,

})

