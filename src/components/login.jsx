import React, { useEffect, useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearState,
  loginUserAction,
  userSelector,
} from '../Redux/slices/userSlice';

const Login = () => {
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginUserAction({ Email, password }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate('/home');
    }
  }, [isError, isSuccess]);

  return (
    <div className="loginForm">
      <h1 className="icon">
        L<FontAwesomeIcon icon={faCloud} />
        gin
      </h1>

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
      <button
        onClick={() => {
          navigate('./register');
        }}
      >
        SignIn
      </button>
    </div>
  );
};

export default Login;
