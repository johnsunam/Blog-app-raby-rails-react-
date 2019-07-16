import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import articleReducer from './articleReducer';
import currentReducer from './currentReducer';
import commentsReducer from './commentReducer'

export default combineReducers({
  articlesReducer,
  articleReducer,
  currentReducer,
  commentsReducer,
});
