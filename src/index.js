import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SamplePractice from "./Tutoring/SamplePractice";
import MyPractice2 from "./Tutoring/MyPractice2";



ReactDOM.render(
  <React.StrictMode>
    <MyPractice2 />
  </React.StrictMode>,
  document.getElementById('root')
);
// root에 앱을 렌더

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
