import React, { useEffect, useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:8008/login',
        JSON.stringify({ Email, password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log();

      if (data.user) {
        setIsLogin(data.msg);
        navigate('/Home');
      }
    } catch (error) {
      setIsLogin('Your Credential are wrong Please check');

      throw new Error('Your Credential are wrong Please check');
    }
  };
  useEffect(() => {
    handleLogin;
  }, [Email, password]);
  return (
    <div className="loginForm">
      <h1 className="icon">
        L<FontAwesomeIcon icon={faCloud} />
        gin
      </h1>
      <p>{isLogin ? isLogin : null}</p>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
