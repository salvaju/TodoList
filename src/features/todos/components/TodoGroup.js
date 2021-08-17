import React from 'react'
import TodoItem from './TodoItem'
import { initialTodoList } from "../../../common/constants/constants";
import { getAllTodoIds } from "../../../common/utils/utils";

function TodoGroup() {
    return (
        <div>
            TodoGroup
            {
                getAllTodoIds(initialTodoList).map((id) => (
                <TodoItem key = {id} itemId = {id}/>
                ))}
        </div>
    )
}

export default TodoGroup
