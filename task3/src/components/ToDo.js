import React, { useEffect, useState } from 'react';
import './ToDo.css';
import { FcCancel, FcCheckmark, FcHighPriority } from 'react-icons/fc';
function ToDo() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function deleteTodo(index, e) {
    e.stopPropagation();
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }
  function isTodoCompleted(index, e) {
    e.stopPropagation();
    let todosArray = [...todos];
    todosArray[index].completed = !todosArray[index].completed;
    setTodos(todosArray);
  }

  return (
    <div className='todos_wrapper'>
      {todos.map((item, index) => (
        <div
          key={index}
          className='todo'
          onClick={() => {
            console.log(item);
          }}
        >
          <div className='title'>
            <p>{item.title}</p>
          </div>
          <div
            className='todo_status'
            onClick={(e) => isTodoCompleted(index, e)}
          >
            {item.completed ? <FcCheckmark /> : <FcHighPriority />}
          </div>

          <div className='delete_todo' onClick={(e) => deleteTodo(index, e)}>
            <FcCancel />
          </div>
        </div>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
}

export default ToDo;
