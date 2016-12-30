var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo')

describe('ToDoList', () => {
    it('should exist', () => {
        expect(ToDoList).toExist();
    });

    it('should render 1 todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Clean the yard'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

        expect(todosComponents.length).toBe(todos.length);
    });
});