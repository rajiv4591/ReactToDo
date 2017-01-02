var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
    it('should exist', () => {
        expect(ToDoApp).toExist();
    });

    it('should add todo to the todos state on hamdleaddtodo', () => {
        var todoText = 'Test Text';
        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

        todoApp.setState(
            {todos: []}
        );
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handletoggle called', () => {
        var todoData = {
            id: 11,
            text: 'test features',
            completed: false
        };

        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

        todoApp.setState(
            {todos: [todoData]}
        );

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});