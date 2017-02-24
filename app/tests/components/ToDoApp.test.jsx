var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configure-store');
var ToDoApp = require('ToDoApp');
import ToDoList from 'ToDoList'; 

describe('ToDoApp', () => {
    it('should exist', () => {
        expect(ToDoApp).toExist();
    });

    it('should render todolist', () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ToDoApp/>
            </Provider>
        );

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, ToDoList)[0];

        expect(todoList.length).toEqual(1);
    });
});