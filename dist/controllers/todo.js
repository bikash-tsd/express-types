"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODO = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newToDo = new todo_1.Todo(Math.random().toString(), text);
    TODO.push(newToDo);
    res.status(201).json({
        message: 'Created the todo.',
        createTodo: newToDo
    });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.json({
        todos: TODO
    });
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODO.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('could not find todo');
    }
};
exports.updateTodo = updateTodo;
