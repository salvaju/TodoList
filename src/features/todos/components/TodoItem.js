import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoById, ToggleTodo, RemoveTodo} from '../reducers/todosSlice';
import "../styles/TodoItem.css";
import {updateTodo, deleteTodo} from '../../apis/todos';
import {DeleteOutlined, FormOutlined} from '@ant-design/icons'
import { Modal, Input } from 'antd';

function TodoItem(props) {

    const todo = useSelector(
        (state) => selectTodoById(state, props.itemId)
    )

    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";
    const { TextArea } = Input;

    function handleClick() {
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            dispatch(ToggleTodo({id: props.itemId, updateTodo: response.data}));
        });
    }

    function handleRemove() {
        deleteTodo(todo.id).then((response) => {
            console.log("response: ", response);
            dispatch(RemoveTodo(todo.id));
        })
    }


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [todoText, setTodoText] = useState("");
    
    const openModal = () => {
        setIsModalVisible(true);
    }
 
    const handleOk = () => {
        if (todoText === "") {

            setIsModalVisible(false);
            
        } else {

            updateTodo(props.itemId, {text: todoText}).then((response) => {
                console.log("todoText", todoText);
                console.log("response", response.data);
                dispatch(ToggleTodo({id: props.itemId, updateTodo: response.data}));
            });

            setIsModalVisible(false);
            setTodoText("");

        }
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function handleSetTodoText (event) {
        setTodoText(event.target.value);
    }

    return (
        <div className = {`TodoItem-todo ${todoStatus}`}>

            <FormOutlined className = "update" onClick = {openModal}/>
            <span onClick = {handleClick}> {todo.text} </span>
            <DeleteOutlined className = "remove" onClick = {handleRemove}/>

            <Modal title = 'Edit Todo' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <TextArea placeholder = {todo.text} value = {todoText}onChange = {handleSetTodoText}/>
            </Modal>

        </div> 
    );
}

export default TodoItem
