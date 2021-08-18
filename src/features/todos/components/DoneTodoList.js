import React from 'react'
import { selectDoneList } from '../reducers/todosSlice'
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import "../styles/doneTodo.css"



function DoneTodoList() {

    //not working
     const todos = useSelector(selectDoneList);


    return (
        <div className = 'card'>
            {/*console.log("todos, ", todos[0].text)*/}
            <Card title="Done Todo List" style={{ width: 300 }}>
            {todos.map((todo) =>  <div>{todo.text}</div>)}
            </Card>
        </div>
    )
}

export default DoneTodoList
