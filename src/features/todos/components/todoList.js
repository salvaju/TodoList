import React from 'react'
import todoForm from './todoForm'
import TodoGroup from './TodoGroup'

function todoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup/>
            <todoForm/>
            
        </div>
    )
}

export default todoList
