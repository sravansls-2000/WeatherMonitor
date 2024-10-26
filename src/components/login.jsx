import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className="loginForm">
      <h1 className="icon">
        L<FontAwesomeIcon icon={faCloud} />
        gin
      </h1>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>login</button>
    </div>
  );
};

export default Login;
