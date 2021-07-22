import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './App';
// import Digitalclc from './Digitalclc';
// import ToDoList from './ToDoList';
// import Boot from './Boot';
import './index.css';
// import One from './One';
// import Axioslec from './Axioslec';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
   <>
   <BrowserRouter>
      <App />
   </BrowserRouter>
   </>,document.getElementById('root')
);