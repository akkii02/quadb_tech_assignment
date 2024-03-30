import React, { useState } from "react";
import { addTodo } from "../Store/actions";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter your todo" 
                  value={todo} 
                  onChange={(e) => setTodo(e.target.value)} 
                />
                <div className="input-group-append">
                  <button 
                    className="btn btn-primary" 
                    type="button" 
                    onClick={handleAddTodo}
                  >
                    Add Todo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
