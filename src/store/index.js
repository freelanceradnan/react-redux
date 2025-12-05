import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counter';
import themeReducer from './reducers/theme';

const rootReducer=combineReducers({
  counter:counterReducer,
  theme:themeReducer
})
export const store=createStore(rootReducer)
