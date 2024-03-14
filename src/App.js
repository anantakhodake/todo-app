import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import "./App.css";
import { useState } from "react";

function App() {
  const [isCompleateScreen, setIsCompleateScreen] = useState(false);
  const [alltodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handletodo = () => {
    setAllTodos([
      ...alltodos,
      {
        title: newTitle,
        description: newDescription,
      },
    ]);
  };
  return (
    <div className="App">
      <h1>Todo app</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter the title?"
            ></input>
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter the title description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            ></input>
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              onClick={() => handletodo()}
              className="primary-btn"
            >
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
          {alltodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div>
                  <AiFillDelete className="icon" />
                  <BsCheckLg className=" check-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
