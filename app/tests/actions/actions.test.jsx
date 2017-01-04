var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some'
        };
        var result = actions.setSearchText(action.searchText);
        expect(result).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Walk'
        };
        var result = actions.addTodo(action.text);
        expect(result).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var result = actions.toggleShowCompleted();
        expect(result).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        var result = actions.toggleTodo(action.id);
        expect(result).toEqual(action);
    });
});