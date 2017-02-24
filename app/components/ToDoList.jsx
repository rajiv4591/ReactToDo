var React = require('react');
var {connect} = require('react-redux');
import ToDo from 'ToDo';
var ToDoApi = require('ToDoApi');

export var ToDoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                );
            }
            return ToDoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    <ToDo key={todo.id} {...todo} />
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

export default connect(
    (state) => {
        return state;
    }
)(ToDoList);