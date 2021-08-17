import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initialTodoList } from "../../../common/constants/constants";
import { getTodoById } from "../../../common/utils/utils";
import { selectTodoById, ToggleTodo, RemoveTodo} from '../reducers/todosSlice';
import "../styles/TodoItem.css";

function TodoItem(props) {

    //const todo = getTodoById(initialTodoList, props.itemId)
    const todo = useSelector(
        (state) => selectTodoById(state, props.itemId)
    )

    const dispatch = useDispatch();

    const todoStatus = todo.done ? "done" : ""

    function handleClick() {
        dispatch(ToggleTodo(props.itemId))
    }

    function handleRemove(event) {
        event.stopPropagation();
        dispatch(RemoveTodo(props.itemId))
    }



    return (
        <div className = {`TodoItem-todo ${todoStatus}`} on onClick = {handleClick}>
            {todo.text}  <span className = "remove" onClick = {handleRemove}> X</span>
        </div>
    );
}

export default TodoItem
