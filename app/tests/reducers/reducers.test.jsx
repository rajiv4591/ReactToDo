var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
    describe('Search text', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Some'
            };

            var result = reducers.searchTextReducer(df(''), df(action));
            expect(result).toEqual(action.searchText);
        });
    });

    describe('Show completed', () => {
        it('should set show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            };

            var result = reducers.toggleShowCompletedReducer(df(false), df(action));
            expect(result).toBe(true);
        });
    });

    describe('Todos reducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk dog'
            };

            var result = reducers.todosReducer(df([]), df(action));
            expect(result.length).toEqual(1);
            expect(result[0].text).toEqual(action.text);
        });

        it('should toggle todo', () => {
            var todos = [
                {
                    id: 123,
                    text: 'something',
                    completed: true,
                    createdAt: 123,
                    completedAt: 256,
                }
            ];
            var action = {
                type: 'TOGGLE_TODO',
                id: 123
            };

            var result = reducers.todosReducer(df(todos), df(action));
            expect(result[0].completed).toEqual(false);
            expect(result[0].completedAt).toEqual(undefined);
        });
    });
});