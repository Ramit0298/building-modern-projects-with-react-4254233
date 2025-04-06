import { useSelector } from "react-redux";
// import { observer } from "mobx-react-lite";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getCompletedTodos,
  getIncompleteTodos,
  // getTodos,
  getTodosLoading,
} from "./selectors";
// import { useRecoilValue, useRecoilState } from "recoil";
// import { todosAtom } from "./atoms";
// import todosStore from "./todosMobx";

export default function TodoList() {
  // const TodoList = observer(() => {
  const todosAreLoading = useSelector(getTodosLoading);
  // const reduxTodos = useSelector(getTodos);
  // React 19 is not working with Recoil
  // const recoilTodos = useRecoilValue(todosAtom);
  // const [recoilTodosState, setRecoilTodos] = useRecoilState(todosAtom);

  const completedTodos = useSelector(getCompletedTodos);
  const imcompleteTodos = useSelector(getIncompleteTodos);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {completedTodos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
          <h3>Incomplete:</h3>
          {imcompleteTodos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </div>
  );
}
// });

// export default TodoList;
