var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
    it('should exist', () => {
        expect(ToDoSearch).toExist();
    });

    it('should call onsearch with entered input text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    });

    it('should call onsearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});