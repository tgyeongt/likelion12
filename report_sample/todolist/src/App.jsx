import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
    });
    setTodoList(nextTodoList);
    setText('');
    console.log(todoList);
  };

  const onDelete = (id) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <div className="container">
      <div className="contents">
        <h1>TODO LIST</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChangeInput}
            className="inputText"
            type="text"
            placeholder="Enter your todo"
            value={text}
          />
          <input className="inputSubmit" type="submit" value="Add Todo" />
        </form>
        <div className="lists">
          {todoList.map((todoItem) => (
            <div key={todoItem.id}>
              <input className="checkbox" type="checkbox" />
              <span className="listContent">{todoItem.text}</span>
              <button
                type="button"
                className="deleteBtn"
                onClick={() => onDelete(todoItem.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
