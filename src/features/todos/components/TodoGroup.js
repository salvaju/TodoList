import {React, useEffect} from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, selectTodoIds } from '../reducers/todosSlice';
import "../styles/TodoGroup.css"
import {getTodos} from "../../apis/todos"
import { Card } from 'antd';

function TodoGroup() {

    const todoIds = useSelector(selectTodoIds)
    const dispatch = useDispatch();
    
    useEffect(() => {

        getTodos().then((response) => {
            dispatch(addTodos(response.data));
        })

    }, [dispatch])

    return (
        <div className = "todos">


    <Card title="Todo List" style={{ width: 300 }}>
      {todoIds.map((id) => (<TodoItem key = {id} itemId = {id}/>))}
    </Card>

        </div>
    )


}

export default TodoGroup
