import React from 'react';
import { render } from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from "./redux/reducer/rootReducer";


const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
