import {combineReducers} from 'redux';
import characters from './characters';
import favorites from './favorites';
import search from './search';

const reducers = combineReducers({
  characters,
  favorites,
  search,
});

export default reducers;
