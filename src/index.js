import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Store
import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
const todo = createStore(myReducer);
ReactDOM.render(  
  <Provider store={ todo }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
