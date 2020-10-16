import { createStore, combineReducers } from 'redux';
import { loading, popup, profile, friend } from './reducers';

/**
 * use combine reducer
 */
const reducer = combineReducers({
  loading,
  popup,
  profile,
  friend
})

/**
 * setup redux store
 */
const store = createStore(reducer);

export { store }

export * from './reducers'