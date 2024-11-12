import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';

export default function Home(props) {
  const [match, setMatch] = useState();
  const history = useNavigate(); // Rename hystory to history

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const matchDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8008/match-details', {
        headers: {
          'X-Auth-Token': localStorage.getItem('token'),
        },
      });
      console.log(response);
      setMatch(response.data); // Assuming you'd like to store response data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      console.log(user);
      if (!user) {
        localStorage.removeItem('token');
        history.replace('/');
      } else {
        matchDetails();
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {' '}
      {/* Correct onSubmit casing */}
      <input />
      <input type="submit" />
    </form>
  );
}
