import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import "../styles/TodoForm.css";
import { AddTodo } from "../reducers/todosSlice";
import { createTodo } from "../../apis/todos"
import { Button, Input, Search } from 'antd';

function TodoForm() {

    const { Search } = Input;

    const dispatch = useDispatch();

    const [text, setText] = useState("");

    function changeHandler(event) {
        setText(event.target.value);
    }

    function handleAdd(){

        if(text !== "") {
           createTodo(text).then((response) => {
               dispatch(AddTodo(response.data));
           });

           setText("");
        }
        
    }
    return (
        <div className = "form">
            
            <Search
                placeholder="Add a new todo."
                allowClear
                enterButton="Add Todo"
                size="large"
                value = {text}
                onChange={changeHandler}
                onSearch={handleAdd}
            />
        </div>
    )


}

export default TodoForm
