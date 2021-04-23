import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
  applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);