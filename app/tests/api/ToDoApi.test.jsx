var expect = require('expect');

var ToDoApi = require('ToDoApi');

describe('ToDoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(ToDoApi).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            ToDoApi.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};
            ToDoApi.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should set return empty array for bad localstorage data', () => {
            var actualTodos = ToDoApi.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localstorage', () => {
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = ToDoApi.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });
    
});