import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Punto1} from "./punto1";
import {Punto2} from "./punto2";
import {Punto3} from "./punto3";
import {Punto4} from "./punto4";
import {Punto5} from "./punto5";
import {Punto6} from "./Punto6";
import {Punto7} from "./Punto7";
import {Punto8} from "./Punto8";
import {Punto9} from "./Punto9";
import {Punto11} from ":/Punto11";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Punto1></Punto1>
  <Punto2></Punto2>
  <Punto3></Punto3>
  <Punto4></Punto4>
  <Punto5></Punto5>
  <Punto6></Punto6>
  <Punto7></Punto7>
  <Punto8></Punto8>
  <Punto9></Punto9>
  <Punto11></Punto11>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
