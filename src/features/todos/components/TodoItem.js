import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initialTodoList } from "../../../common/constants/constants";
import { getTodoById } from "../../../common/utils/utils";
import { selectTodoById, ToggleTodo, RemoveTodo} from '../reducers/todosSlice';
import "../styles/TodoItem.css";
import {updateTodo, deleteTodo} from '../../apis/todos';
import {DeleteOutlined} from '@ant-design/icons'

function TodoItem(props) {

    //const todo = getTodoById(initialTodoList, props.itemId)
    const todo = useSelector(
        (state) => selectTodoById(state, props.itemId)
    )

    const dispatch = useDispatch();

    const todoStatus = todo.done ? "done" : ""

    function handleClick() {
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            console.log("response: ", response);
            dispatch(ToggleTodo({id: props.itemId, updateTodo: response.data}));
        });
    }

    function handleRemove(event) {
        event.stopPropagation();

        deleteTodo(todo.id).then((response) => {
            console.log("response: ", response);
            dispatch(RemoveTodo(todo.id));
        })
    }

    return (
        <div className = {`TodoItem-todo ${todoStatus}`} on onClick = {handleClick}>
            {todo.text} <DeleteOutlined className = "remove" onClick = {handleRemove} />  
        </div>
    );
}

export default TodoItem
