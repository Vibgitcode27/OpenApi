import { Todo } from "./todo"

export type TodoCreationsparams = Pick<Todo , "title" | "description" | "done">

export class TodoService {
    public get(todoId : string) : Todo {
        return {
            id : todoId ,
            title : "mocked todo",
            description : "Mocked todo",
            done : false
        }
    }

    public create(TodoCreationsparams : TodoCreationsparams) : Todo {
        console.log("This is create service")
        return {
            id : "1",
            title : "mocked todo",
            description : "Mocked todo",
            done : false
        }
    }
}