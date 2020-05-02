/*
 * @Author: your name
 * @Date: 2020-05-02 21:25:19
 * @LastEditTime: 2020-05-02 21:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/level/level-react/src/index.js
 */
// React负责逻辑通知，数据->VDOM,这里不能注释，JSX依赖于React
import React from 'react';
// ReactDom渲染实际DOM，VDOM->DOM
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
