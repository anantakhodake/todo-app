import { AiFillDelete  } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import "./App.css";
import { useState } from "react";

function App() {
  const [isCompleateScreen, setIsCompleateScreen] = useState(false);
  return (
    <div className="App">
      <h1>Todo app</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input type="text" placeholder="Enter the title?"></input>
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter the title description"
            ></input>
          </div>
          <div className="todo-input-item">
            <button type="button" className="primary-btn">
              Add
            </button>
          </div>
        </div>
        <div className="button-area">
          <button
            className={`secondary-btn ${
              isCompleateScreen === false && "active"
            }`}
            onClick={() => setIsCompleateScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondary-btn ${
              isCompleateScreen === true && "active"
            }`}
            onClick={() => setIsCompleateScreen(true)}
          >
            Compleated
          </button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task1</h3>
            <p>Description</p>
          </div>
          <div>
            <AiFillDelete className="icon" />
            <BsCheckLg  className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
