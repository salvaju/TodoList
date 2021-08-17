import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import "../styles/TodoForm.css";
import { AddTodo } from "../reducers/todosSlice";

function TodoForm() {

    const dispatch = useDispatch();

    const [text, setText] = useState("");

    function changeHandler(event) {
        setText(event.target.value);
    }

    function handleAdd(){
        dispatch(AddTodo(text));
    }


    return (
        <div>
            <input type = "text" placeholder = "Add a new todo." value = {text} onChange = {changeHandler}></input>
            <button onClick = {handleAdd}>add</button>
        </div>
    )


}

export default TodoForm
