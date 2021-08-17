import React from 'react'
import TodoItem from './TodoItem'
import { initialTodoList } from "../../../common/constants/constants";
import { getAllTodoIds } from "../../../common/utils/utils";
import { useSelector } from 'react-redux';
import { selectTodoIds } from '../reducers/todosSlice';

function TodoGroup() {

    const todoIds = useSelector(selectTodoIds)

    return (
        <div>
            TodoGroup
            {
                todoIds.map((id) => (
                <TodoItem key = {id} itemId = {id}/>
                ))}
        </div>
    )


}

export default TodoGroup
