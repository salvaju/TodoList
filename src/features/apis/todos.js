import api from "./index";

const getTodos = () => {
    return api.get("/todos");
}

export default getTodos;