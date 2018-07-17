import {combineReducers} from 'redux';
import comments from './comments.js';
import  formReducer from './formReducer.js';
import users from './users.js';

const rootReducer = combineReducers({
  form: formReducer,
  users,
  comments
})

export default rootReducer;