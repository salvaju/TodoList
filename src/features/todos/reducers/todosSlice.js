import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState(


);

const todosSlice = createSlice (

    {
        name: "todos",
        initialState: initialState,
        reducers: {

            AddTodo(state, action) {
                todosAdapter.addOne (
                    state, action.payload
                )
                return state;
            },

            ToggleTodo(state, action) {
                todosAdapter.updateOne(state, {
                    id: action.payload.id,
                    changes: action.payload.updateTodo
                })
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