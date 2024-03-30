export const addTodo = (todo) => ({
      type: 'ADD_TODO',
      payload: {
        task: todo,
        completed: false
      }
    });
    
    export const deleteTodo = (index) => ({
      type: 'DELETE_TODO',
      payload: index
    });
    
    export const toggleTodo = (index) => ({
      type: 'TOGGLE_TODO',
      payload: index
    });
    