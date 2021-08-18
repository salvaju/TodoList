import {React, useEffect} from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, selectTodoIds } from '../reducers/todosSlice';
import "../styles/TodoGroup.css"
import {getTodos} from "../../apis/todos"

function TodoGroup() {

    const todoIds = useSelector(selectTodoIds)
    const dispatch = useDispatch();
    
    useEffect(() => {

        getTodos().then((response) => {
            dispatch(addTodos(response.data));
        })

    }, [])

    return (
        <div className = "todos">

            {
                todoIds.map((id) => (<TodoItem key = {id} itemId = {id}/>))
            } 

        </div>
    )


}

export default TodoGroup
