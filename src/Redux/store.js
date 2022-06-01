import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsRedux from './postsRedux';
import categoryRedux from './categoryRedux';

const subreducers = { posts: postsRedux, categoryes: categoryRedux };

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
