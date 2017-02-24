var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {AddToDo} = require('AddToDo');

describe('AddToDo', () => {
    it('should exist', () => {
        expect(AddToDo).toExist();
    });

    it('should dispatch add_todo when valid todo text', () => {
        var todoText = 'Check Mail';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };
        var spy = expect.createSpy();
        var addTodos = TestUtils.renderIntoDocument(<AddToDo dispatch = {spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodos));

        addTodos.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch addtodo when invalid todo text', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodos = TestUtils.renderIntoDocument(<AddToDo dispatch = {spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodos));

        addTodos.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});