import { createSelector } from "@reduxjs/toolkit";

export const getTodos = (state) => state.todos.value;
export const getTodosLoading = (state) => !state.loading.value.completed;

// export const getCompletedTodos = (state) =>
//   getTodos(state).filter((todo) => todo.isCompleted);

// export const getIncompleteTodos = (state) =>
//   getTodos(state).filter((todo) => !todo.isCompleted);

// The selectors being depended on are memoized.
// So if those selectors are not updated, React doesn't need to
// recompute the selectors which depend on them
export const getCompletedTodos = createSelector([getTodos], (todos) =>
  todos.filter((todo) => todo.isCompleted)
);

export const getIncompleteTodos = createSelector([getTodos], (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);
