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
});