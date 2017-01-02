var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid'); 

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Wash the car'
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
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
