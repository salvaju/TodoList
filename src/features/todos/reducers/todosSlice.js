import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState(

    {
        ids:["1"],
        entities: {
            1: {
                id: "1",
                text: "first todo",
                done: false
            }
        }
    }

);

const todosSlice = createSlice (

    {
        name: "todos",
        initialState: initialState,
        reducers: {

            AddTodo(state, action) {
                todosAdapter.addOne (
                    state,
                    {
                        id: "5",
                        text: action.payload,
                        done: false
                    }
                )
                return state;
            }

        }
    }

);

export const {AddTodo} = todosSlice.actions;

export default todosSlice.reducer;

export const {selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors(
    (state) => state.todoList
);