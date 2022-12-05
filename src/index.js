import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const postsData = [
  { id: 1, message: "Hi, how are you?", likesCount: 10 },
  { id: 2, message: "It's my first post", likesCount: 25 },
  { id: 3, message: "Easy", likesCount: 100 },
];

const dialogsData = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Ksy" },
  { id: 3, name: "Liza" },
  { id: 4, name: "John" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Alexis" },
];

const messagesData = [
  { id: 1, textMessage: "Hi" },
  { id: 2, textMessage: "Hello" },
  { id: 3, textMessage: "You" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>
);

reportWebVitals();
