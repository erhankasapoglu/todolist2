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
        <>
          <TodoList user={user} />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleLogout}>Çıkış Yap</button>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
