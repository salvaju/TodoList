import React from 'react'
import TodoForm from './todoForm'
import TodoGroup from './TodoGroup'

function TodoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup></TodoGroup>
            <TodoForm></TodoForm>
        </div>
    )
}

export default TodoList
