import { useDispatch } from "react-redux";
// import { deleteTodo, markTodoAsCompleted } from "./todosSlice";
import { deleteTodo, markTodoAsCompleted } from "./thunks";
import styled from "styled-components";

const getBackgroundColor = ({ important }) =>
  important ? "background-color: green;" : "background-color: red;";

// ${(props) => props.important && "background-color: orange;"}
// background-color: ${(props) => (props.important ? "green" : "red")};
const CardContainer = styled.div`
  ${getBackgroundColor};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  padding: 16px;
`;

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <CardContainer important={todo.isCompleted}>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button
          onClick={() => {
            // dispatch(deleteTodo(todo.text));
            dispatch(deleteTodo(todo.id));
          }}
        >
          Delete Item
        </button>
      ) : (
        <button
          onClick={() => {
            // dispatch(markTodoAsCompleted(todo.text));
            dispatch(markTodoAsCompleted(todo.id));
          }}
        >
          Mark as Completed
        </button>
      )}
    </CardContainer>
  );
}
