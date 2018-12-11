import React from 'react';
import ReactDOM from 'react-dom';
import App from './App1';
import * as serviceWorker from './serviceWorker';

// 引入redux
// compose 是一个组合函数 把redux和reduxTools结合起来 window.devToolsExtension
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from "react-redux";

import {reducer} from './redux2/redux'


// 使用中间件
let store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():function () {}
));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



