// https://www.youtube.com/watch?v=OSSpVLpuVWA
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import {applyMiddleware,compose,combineReducers,createStore} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';



const allReducers=combineReducers({
    products:productReducer,
    user:userReducer
});

const allStoreEnhancers =compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    allReducers,{
    products:[{name:'iPhone'}],
    user:'Michael'
    },
    allStoreEnhancers

);


ReactDOM.render(<Provider store={store}><App aRandomProps="whatever" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
