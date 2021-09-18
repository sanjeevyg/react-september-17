import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import {useStore, Provider} from 'react-redux';

const count = (state=0, action) => {
  switch(action.type) {
    case "INCREASE":
      return state + 1
    case "DECREASE":
      return state - 1
    default: 
      return state
  }
}

const character = (state=[], action) => {
  switch(action.type) {
    case "GET_CHARACTERS":
      return action.characters
    case "DELETE_CHARACTERS":
      return state
    default: 
      return state
  }
}

const rootReducers = combineReducers({count, character})
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(useStore)

console.log(store.getState())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
