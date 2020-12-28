import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { PasswordReducer } from './features/password';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  password: PasswordReducer
});

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
);

export default store;
