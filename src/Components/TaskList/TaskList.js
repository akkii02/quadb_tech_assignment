import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo,toggleTodo } from "../Store/actions";


const TaskList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleToggle = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li 
            key={index} 
            className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : ''}`}
          >
            {todo.task}
            <div>
              <button 
                className="btn btn-outline-danger btn-sm mr-2" 
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button 
                className="btn btn-outline-secondary btn-sm" 
                onClick={() => handleToggle(index)}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
