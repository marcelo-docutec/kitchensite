import reducer from './root.reducer';
import { createStore } from 'redux';

let store;

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  store = createStore(reducer);
}

export default store;
