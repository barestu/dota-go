import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import heroesReducers from './heroes/reducers';
import matchesReducers from './matches/reducers';

const reducers = combineReducers({
  heroes: heroesReducers,
  matches: matchesReducers
})

const store = createStore(
  reducers, applyMiddleware(thunk, logger)
)

export default store