import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initialTodoList } from "../../../common/constants/constants";
import { getTodoById } from "../../../common/utils/utils";
import { selectTodoById, ToggleTodo } from '../reducers/todosSlice';

function TodoItem(props) {

    //const todo = getTodoById(initialTodoList, props.itemId)
    const todo = useSelector(
        (state) => selectTodoById(state, props.itemId)
    )

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(ToggleTodo(props.itemId))
    }

    return (
        <div on onClick = {handleClick}>
            {todo.text}
        </div>
    );
}

export default TodoItem
