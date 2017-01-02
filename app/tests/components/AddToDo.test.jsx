var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
    it('should exist', () => {
        expect(AddToDo).toExist();
    });

    it('should call updateNewTodo prop with valid data', () => {
        var todoText = 'Check Mail';
        var spy = expect.createSpy();
        var addTodos = TestUtils.renderIntoDocument(<AddToDo updateNewTodo = {spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodos));

        addTodos.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call updateNewTodo prop with invalid data', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodos = TestUtils.renderIntoDocument(<AddToDo updateNewTodo = {spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodos));

        addTodos.refs.newTodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});