
import React, { useState } from 'react';
import './TodoList.css'; 

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  user: string;
}

const TodoList: React.FC<TodoListProps> = ({ user }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container"> {}
      <h1>Hoş geldiniz, {user}!</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Ekle</button>
      </div>
      <ul className="todo-list"> {}
        {todos.map((todo) => (
          <li key={todo.id} className="todo-list-item"> {}
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>Tamamlandı</button>
            <button onClick={() => deleteTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
