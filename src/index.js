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
import  bookSaga  from "./redux/sagas/index";
const sagaMiddleware = createSagaMiddleware();

const globalStore = createStore(
  rootReducer,
 compose(applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


  sagaMiddleware.run(bookSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
