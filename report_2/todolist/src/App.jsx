import styled from 'styled-components';
import { useState } from 'react';


  const TodoContainer = styled.div`
    font-family: Arial, sans-serif;
    margin-left: 50px;
  `;

  const TodoTitle = styled.h1`
    color: #007AFF;
  `;

  const TodoInput = styled.input`
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px solid #007AFF;
    outline: none;
  `;

  const TodoButton = styled.button`
    padding: 10px;
    font-size: 16px;
    color: white;
    margin-left: 10px;
    background-color: #007AFF;
  `;

  const TodoDelete = styled.button`
    padding: 10px;
    font-size: 16px;
    color: white;
    margin-left: 10px;
    background-color: #FF3B30;
  `;

  const TodoItem = styled.div`
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    align-items: center;
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

    function handleDelete(index) {
      setTodoList(todoList.filter((_, idx) => idx !== index));
    }

    return (
      <>
      <TodoContainer>
        <TodoTitle>My Todo List</TodoTitle>
        <TodoInput type="text" value={todo} onChange={handleChange} placeholder="Enter your todo" />
        <TodoButton onClick={handleClick}>Add Todo</TodoButton>
        <TodoList>
          {todoList.map((item, index) => (
            <TodoItem key={index}>
              {item}
              <TodoDelete onClick={() => handleDelete(index)}>Delete</TodoDelete>
            </TodoItem>
          ))}
        </TodoList>
      </TodoContainer>
      </>
    );
  };