var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoApi = require('ToDoApi');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: ToDoApi.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  },
  componentDidUpdate: function () {
    ToDoApi.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = ToDoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddToDo updateNewTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = ToDoApp;
