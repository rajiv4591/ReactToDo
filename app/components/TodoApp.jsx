var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Wash the car'
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAddTodo: function (text) {
    alert(text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchtext: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={todos}/>
        <AddToDo updateNewTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = ToDoApp;
