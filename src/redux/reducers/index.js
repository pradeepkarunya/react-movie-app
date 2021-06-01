import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import movieReduccer from './movieReducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  movies: movieReduccer
});

export default rootReducer;
