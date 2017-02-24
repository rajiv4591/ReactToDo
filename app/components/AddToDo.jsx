var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
    handleFormSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var newTodo = this.refs.newTodo.value;
        if(newTodo) {
            this.refs.newTodo.value = '';
            dispatch(actions.addTodo(newTodo));
        } else {
            this.refs.newTodo.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" ref="newTodo" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

export default connect ()(AddToDo);
