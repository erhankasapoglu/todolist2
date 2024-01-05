
import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {

    if (username === 'erhan' && password === 'erhan') {
      onLogin(username);
    } else {
      alert('Hatalı kullanıcı adı veya şifre.');
    }
  };

  return (
    <div className="login-container center-content">
      <h2>Giriş Yap</h2>
      <div className="login-input-container">
        <label>Kullanıcı Adı:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-input-container">
        <label>Şifre:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

export default Login;
