import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Library Packages 
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from 'redux-logger';

// Custom redux Elements 
import rootReducer from "./redux/reducers/index";
import  rootSaga  from "./redux/sagas/index";
const sagaMiddleware = createSagaMiddleware();

const globalStore = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
