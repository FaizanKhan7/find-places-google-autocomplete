import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState);

  return store;
};

const store = configureStore();

export default store;
