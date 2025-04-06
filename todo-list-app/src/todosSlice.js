import { createSlice } from "@reduxjs/toolkit";
import { loadingCompleted } from "./loadingSlice";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
    // value: [
    //   {
    //     text: "Go to the store",
    //     isCompleted: true,
    //   },
    //   {
    //     text: "New Todo",
    //     isCompleted: false,
    //   },
    // ],
  },
  reducers: {
    // createTodo: (state, action) => {
    //   state.value = [
    //     ...state.value,
    //     {
    //       text: action.payload,
    //       isCompleted: false,
    //     },
    //   ];
    // },
    // markTodoAsCompleted: (state, action) => {
    //   state.value = [
    //     ...state.value.filter((val) => val.text !== action.payload),
    //     {
    //       text: action.payload,
    //       isCompleted: true,
    //     },
    //   ];
    // },
    // deleteTodo: (state, action) => {
    //   state.value = state.value.filter((val) => val.text !== action.payload);
    // },
    updateTodos: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadingCompleted, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { updateTodos } = todosSlice.actions;
