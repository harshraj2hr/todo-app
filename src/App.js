import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';

const App = () => {
  const [todo, setToDo] = useState("");
  const [todoList, setToDoList] = useState([]);
  const [editTodoId, setEditToDo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") return;
    if (editTodoId !== null) {
      todoList.map((item) => {
        if (item.id === editTodoId) {
          item.todo = todo;
        }
        return item;
      });
      setToDoList(todoList);
      setEditToDo(null);
      setToDo("");
      return;
    }

    setToDoList([...todoList, { id: `todo+${Date.now()}`, todo }]);
    setToDo("");
  }

  const handleDelete = (id) => {
    if (id === "") return;
    console.log("deleting item with id:", id);
    setToDoList(todoList.filter((item) => item.id !== id));
  }


  return (
    <div className="App">
      <div className="container">
        <h1>To-do App</h1>

        <TaskForm handleSubmit={handleSubmit} todo={todo} setToDo={setToDo} editTodoId={editTodoId} />
        <TasksList todoList={todoList} handleDelete={handleDelete} setEditToDo={setEditToDo} setToDo={setToDo} />

      </div>
    </div>
  );
}

export default App;
