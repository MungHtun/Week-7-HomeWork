import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './1-shopping-list/ShoppingList';
import Greeting from './2-props-types/Greeting';
import Blog from './3-blog/Blog';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Greeting/>, document.getElementById('root'));
// ReactDOM.render(<ShoppingList/>, document.getElementById('root'));
ReactDOM.render(<Blog/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

