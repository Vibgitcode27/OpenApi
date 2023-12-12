"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked todo",
            description: "Mocked todo",
            done: false
        };
    }
    create(TodoCreationsparams) {
        console.log("This is create service");
        return {
            id: "1",
            title: "mocked todo",
            description: "Mocked todo",
            done: false
        };
    }
}
exports.TodoService = TodoService;
