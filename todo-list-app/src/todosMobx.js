import { makeAutoObservable } from "mobx";

class TodosStore {
  todos = [];

  createTodo(text) {
    this.todos.push({
      text,
      isCompleted: false,
    });
  }
  markTodoAsCompleted(text) {
    const todo = this.todos.find((todo) => todo.text === text);
    if (todo) {
      todo.isCompleted = true;
    }
  }
  deleteTodo(text) {
    this.todos = this.todos.filter((todo) => todo.text !== text);
  }
  constructor() {
    makeAutoObservable(this);
  }
}

export default new TodosStore();
