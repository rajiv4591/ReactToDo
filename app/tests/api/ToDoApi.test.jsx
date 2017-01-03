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

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'Some text here',
            completed: true
        }, {
            id: 2,
            text: 'Some other here',
            completed: false
        }, {
            id: 3,
            text: 'Some text here',
            completed: true
        }];

        it('should return all items if show completed is true', () => {
            var filteredTodos = ToDoApi.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return only incomplete items if show completed is false', () => {
            var filteredTodos = ToDoApi.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = ToDoApi.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchtext', () => {
            var filteredTodos = ToDoApi.filterTodos(todos, true, 'text');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if search text is empty', () => {
            var filteredTodos = ToDoApi.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
    
});