import { useState } from "react";
import { useDispatch } from "react-redux";
// import { createTodo } from "./todosSlice";
import { createTodo } from "./thunks";
// import todosStore from "./todosMobx";
import { observer } from "mobx-react-lite";

// export default function NewTodoForm() {
const NewTodoForm = observer(() => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(createTodo(inputText));
          // todosStore.createTodo(inputText); // Create a new todo in MobX store
          setInputText(""); // Clear the input field after creating a todo
        }}
      >
        Create Todo
      </button>
    </div>
  );
  // }
});

export default NewTodoForm;
