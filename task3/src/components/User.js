import React, { useEffect, useState } from 'react';

function User({ id }) {
  const [user, setUser] = useState([]);
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{user}</div>;
}

export default User;
