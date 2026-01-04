import { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setToDo] = useState("");
  const [todoList, setToDoList] = useState([]);
  const [editTodoId, setEditToDo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(todo.trim() === "") return;
    if(editTodoId !== null){
      todoList.map((item) => {
        if(item.id === editTodoId){
          item.todo = todo;
        }
        return item;
      });
      setToDoList(todoList);
      setEditToDo(null);
      setToDo("");
      return;
    }

    setToDoList([...todoList, {id:`todo+${Date.now()}`, todo}]);
    setToDo("");
  }

  const handleDelete = (id) => {
    if(id === "") return;
    console.log("deleting item with id:", id);
    setToDoList(todoList.filter((item) => item.id !== id));
  }


  return (
    <div className="App">
      <div className="container">
        <h1>To-do App</h1>

        <form className="todo-item" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setToDo(e.target.value)} />
          <button className="action-button" type="submit">{(editTodoId !== null) ? "edit" : "add"}</button>
        </form>

        <ul className="tasks-container">
          {todoList.map((item) => (
          <li className='tasks-item' key={item.id}>
            <span className="tasks-text" >{item.todo} </span>
              <button className="action-button" onClick={() => handleDelete(item.id)}>delete</button>
              <button className="action-button"  onClick={() => {
                setEditToDo(item.id);
                setToDo(item.todo);
                }}>edit</button>
            </li>
          ))}
        </ul>
        
      </div>
      </div>
  );
}

export default App;
