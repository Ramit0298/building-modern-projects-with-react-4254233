import { getCompletedTodos } from "./selectors.js";

function testSelectors() {
  const fakeState = {
    todos: {
      value: [
        {
          text: "First item to be tested",
          isCompleted: true,
        },
        {
          text: "Second item to be tested",
          isCompleted: false,
        },
      ],
    },
  };

  const result = getCompletedTodos(fakeState);

  if (result.length === 1 && result[0].text.includes("First")) {
    console.log("getCompletedTodos works!!!");
  } else {
    throw new Error("getCompletedTodos is not working as expected!!!");
  }
}

testSelectors();
