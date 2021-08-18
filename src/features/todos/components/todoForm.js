import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import "../styles/TodoForm.css";
import { AddTodo } from "../reducers/todosSlice";
import { createTodo } from "../../apis/todos"
import { Button } from 'antd';

function TodoForm() {

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
            <input className = "inputBox" type = "text" placeholder = "Add a new todo." value = {text} onChange = {changeHandler}></input>
            <Button className = "buttow" onClick = {handleAdd}>Add</Button>
        </div>
    )


}

export default TodoForm
