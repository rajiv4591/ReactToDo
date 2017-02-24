var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {ToDoSearch} from ('ToDoSearch');

describe('ToDoSearch', () => {
    it('should exist', () => {
        expect(ToDoSearch).toExist();
    });

    it('should dispatch set search text on input change', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch toggle show completed when checkbox checked', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});