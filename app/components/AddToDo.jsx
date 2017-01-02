var React = require('react');

var AddToDo = React.createClass({
    handleFormSubmit: function (e) {
        e.preventDefault();
        var newTodo = this.refs.newTodo.value;
        if(newTodo) {
            this.refs.newTodo.value = '';
            this.props.updateNewTodo(newTodo);
        } else {
            this.refs.newTodo.focus();
        }
    },
    render: function () {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" ref="newTodo" placeholder="What do you need to do?" />
                <button className="button expanded">Add Todo</button>
            </form>
        );
    }
});

module.exports = AddToDo;