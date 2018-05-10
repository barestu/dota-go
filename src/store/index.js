import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import heroesReducers from './heroes/reducers';

const reducers = combineReducers({
  heroes: heroesReducers
})

const store = createStore(
  reducers, applyMiddleware(thunk, logger)
)

export default store