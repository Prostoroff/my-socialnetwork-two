import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: "Hi, it's my first post", likesCount: 12},
  {id: 2, message: "Learned about a new function today", likesCount: 23},
  {id: 3, message: "I'm happy now :)", likesCount: 34},
]

let dialogsData = [
  {id: 1, name: 'Julia'},
  {id: 2, name: 'Alex'},
  {id: 3, name: 'Dmitry'},
  {id: 4, name: 'Almaz'},
  {id: 5, name: 'Jamil'},
]

let messagesData = [
  {id: 1, message: 'Hi! ;)'},
  {id: 2, message: 'How are you?'},
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
