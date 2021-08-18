import api from "./index";

const getTodos = () => {
    return api.get("/todos");
}

const createTodo = (text) => {
    return api.post("/todos", {text})
}

const updateTodo = (id, done) => {
    return api.put(`/todos/%{id}`, {done})
}


export {createTodo, getTodos, updateTodo}