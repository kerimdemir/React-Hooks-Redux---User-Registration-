import {combineReducers} from 'redux';
import user from './user.reducer';
import auth from './login.reducer';

export default combineReducers({
  user,
  auth
});
