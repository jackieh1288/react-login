import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
