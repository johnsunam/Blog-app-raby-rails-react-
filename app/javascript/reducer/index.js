import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import articleReducer from './articleReducer';
import currentReducer from './currentReducer';

export default combineReducers({
  articlesReducer,
  articleReducer,
  currentReducer,
});
