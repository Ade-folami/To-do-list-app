import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  return (
    <>
      <form className="new-item-form">
        <div>
          <label htmlFor="item">New Item</label>
          <input value={newItem} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1> Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete </button>
        </li>
      </ul>
    </>
  );
}
