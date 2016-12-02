var React = require('react');
var Todo = require('Todo');


var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () =>{
      return todos.map((todo)=>{
        return(
          <Todo key = {todo.id} {...todo}/> // Needs to have unique value for key to render component automatically
        )
      });
    };
    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;