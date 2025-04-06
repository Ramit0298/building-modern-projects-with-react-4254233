import axios from "axios";
import { updateTodos } from "./todosSlice";
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from "./loadingSlice";

export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
    const response = await axios.get("/api/todos");
    const todos = response.data;
    dispatch(loadingCompleted(todos));
  } catch (error) {
    console.error("Error loading todos:", error);
    // dispatch(loadingFailed(error.message));
    loadingFailed(error.message);
  }
};

export const createTodo = (newTodoText) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/api/todos", { text: newTodoText });
    const newTodo = response.data;
    const updatedTodos = getState().todos.value.concat(newTodo);

    dispatch(updateTodos(updatedTodos));
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = (todoId) => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/todos/${todoId}`);
    const updatedTodos = getState().todos.value.filter(
      (todo) => todo.id !== todoId
    );

    dispatch(updateTodos(updatedTodos));
  } catch (e) {
    console.log(e);
  }
};

export const markTodoAsCompleted =
  (completedTodoId) => async (dispatch, getState) => {
    // const completedTodo = getState().todos.value.find(
    //   (todo) => todo.id === completedTodoId
    // );
    // if (!completedTodo) {
    //   console.error("Todo not found:", completedTodoId);
    //   return;
    // }

    try {
      const response = await axios.put(`/api/todos/${completedTodoId}`, {
        isCompleted: true,
      });
      const updatedTodo = response.data;
      const updatedTodos = getState().todos.value.map((todo) =>
        todo.id === completedTodoId ? updatedTodo : todo
      );

      dispatch(updateTodos(updatedTodos));
    } catch (e) {
      console.log(e);
    }
  };
