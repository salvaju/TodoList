import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState(

    {
        ids:["1"],
        entities: {
            1: {
                id: "1",
                text: "First Todo",
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
                        id: uuid(),
                        text: action.payload,
                        done: false
                    }
                )
                return state;
            },

            ToggleTodo(state, action) {
                const todo = state.entities[action.payload]
                todo.done = !todo.done;
            },

            RemoveTodo(state, action) {
                todosAdapter.removeOne (state,
                    action.payload
                )
            },

            addTodos(state, action) {
                todosAdapter.addMany(state, action.payload);
            }

        }
    }

);

export const {AddTodo, ToggleTodo, RemoveTodo, addTodos} = todosSlice.actions;

export default todosSlice.reducer;

export const {selectIds: selectTodoIds,
              selectById: selectTodoById,
              selectAll: selectTodos} = todosAdapter.getSelectors((state) => state.todoList);

export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));