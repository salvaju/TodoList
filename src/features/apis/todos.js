import api from "./index";

const getTodos = () => {
    return api.get("/todos");
}

const createTodo = (text) => {
    return api.post("/todos", {text})
}

export {createTodo, getTodos}