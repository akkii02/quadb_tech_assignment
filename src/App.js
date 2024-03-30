import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header/Navbar';
import TodoInput from './Components/TaskInput/TodoInput';
import TaskList from './Components/TaskList/TaskList';
import { Provider } from 'react-redux';
import store from  "./Components/Store/store"

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <TodoInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
