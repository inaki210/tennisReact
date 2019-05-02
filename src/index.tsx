import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  //comentado 02/05/2019 para probar AppIndex
//import AppIndex from './AppIndex';
import './main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  //comentado 02/05/2019 para probar AppIndex
//ReactDOM.render(<AppIndex />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
