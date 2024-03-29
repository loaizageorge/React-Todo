var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;

    if(todo.length > 0){
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function(){
    return(
      <div className = "container__footer">
        <form ref = "form" onSubmit = {this.handleSubmit}>
          <input type = "text" ref = "todo" placeholder = "eg. Watch React videos"/>
          <button className = "button expanded primary hollow">Add todo</button>
        </form>
      </div>

    )
  }
});

module.exports = AddTodo;
