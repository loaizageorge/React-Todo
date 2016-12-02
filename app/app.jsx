var React = require('react');
var ReactDOM = require('react-dom');
var{Route, Router, IndexRoute, hashHistroy} = require('react-router');//Object destructuring

var TodoApp = require('TodoApp');

//Load foundation


$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
