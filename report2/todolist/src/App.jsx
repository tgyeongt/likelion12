import styled from 'styled-components';
import { useState } from 'react'

const TodoContainer = styled.div`
    font-family: Arial, sans-serif;
  `;

  const TodoInput = styled.input`
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
  `;

  const TodoItem = styled.div`
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 5px;
  `;

  const TodoList = styled.div`
    margin-top: 20px;
  `;

  export default function TodoApp() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    function handleClick() {
      setTodoList([todo, ...todoList]);
      setTodo('');
    }

    function handleChange(event) {
      setTodo(event.target.value);
    }

    return (
      <>
      <TodoContainer>
        <h1>Todo List</h1>
        <TodoInput type="text" value={todo} onChange={handleChange} placeholder="Enter your todo" />
        <button onClick={handleClick}>Add Todo</button>
        <TodoList>
          {todoList.map((item, index) => (
            <TodoItem key={index}>{item}</TodoItem>
          ))}
        </TodoList>
      </TodoContainer>
      </>
    );
  };
