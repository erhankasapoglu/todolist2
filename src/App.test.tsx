// src/App.tsx
import React, { useState } from 'react';
import Login from './Login';
import TodoList from './TodoList';

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <TodoList user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {user && <button onClick={handleLogout}>Çıkış Yap</button>}
    </div>
  );
};

export default App;
