var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {configure} from 'configure-store';
import ConnectedTodoList, {ToDoList} from 'ToDoList';
import ConnectedTodo, {ToDo} from 'ToDo';

describe('ToDoList', () => {
    it('should exist', () => {
        expect(ToDoList).toExist();
    });

    it('should render 1 todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Walk the dog',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: 'Clean the yard',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];

        var store = configure({
            todos
        });

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});