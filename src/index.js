/*
 * @Author: your name
 * @Date: 2020-05-02 21:25:19
 * @LastEditTime: 2020-05-02 22:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/level/level-react/src/index.js
 */
// React负责逻辑通知，数据->VDOM,这里不能注释，JSX依赖于React
import React from 'react';
// ReactDom渲染实际DOM，VDOM->DOM
import ReactDOM from 'react-dom';
// import './index.css';
import sytles from './index.module.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1.基本使用 表达式用{}包裹
const name = "React"

// 2.函数的使用方式
const obj = {
  firstName: 'ZhangBo',
  lastName: 'NiMo'
}
function handleName(obj) {
  return obj.firstName + ' ' + obj.lastName;
}

// 3.JSX对象
const greet = <div>good</div>

// 4.条件语句
const show = true

// 5.数组
const a = [0, 1, 2]

const jsx = 
<div className={sytles.app}>
  <div>hello, {name}</div>
  <div>{handleName(obj)}</div>
  <div className={sytles.test}>{greet}</div>
  <div>{show?greet:'登录'}</div>
  <ul>
    {/* diff时候，首先比较type，然后是key，所以同级同类型元素，key值必须唯一 */}
    {a.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
</div>

ReactDOM.render(jsx, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
