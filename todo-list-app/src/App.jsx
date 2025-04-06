import { useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { loadTodos } from "./thunks";
import { useDispatch } from "react-redux";

function App() {
  // const [completedTodos, setCompletedTodos] = useState([
  //   { text: "Take out the trash", isCompleted: true },
  //   { text: "Make dinner", isCompleted: true },
  // ]);
  // const [incompleteTodos, setIncompleteTodos] = useState([
  //   {
  //     text: "Paint the house",
  //     isCompleted: false,
  //   },
  // ]);

  // function markTodoAsComplete(text) {
  //   const updatedIncompleteTodos = incompleteTodos.filter(
  //     (todo) => todo.text !== text
  //   );
  //   const completedTodo = incompleteTodos.find((todo) => todo.text === text);
  //   if (completedTodo) {
  //     setCompletedTodos([
  //       ...completedTodos,
  //       { ...completedTodo, isCompleted: true },
  //     ]);
  //     setIncompleteTodos(updatedIncompleteTodos);
  //   }
  // }

  // function deleteTodo(text) {
  //   const updatedCompletedTodos = completedTodos.filter(
  //     (todo) => todo.text !== text
  //   );
  //   setCompletedTodos(updatedCompletedTodos);
  // }

  // function createTodo(text) {
  //   const newTodo = { text, isCompleted: false };
  //   setIncompleteTodos([...incompleteTodos, newTodo]);
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  });

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
