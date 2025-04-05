import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const App = () => {
//   // This is how to create React elements without JSX
//   return React.createElement("h1", null, "Hello, React!");
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>This is a simple React application.</p>
//     </div>
//   );
// };

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App message="You're now using a component from another file!" />);
