const TasksList = ({ todoList, handleDelete, setEditToDo, setToDo }) => {

  return (
    <>
      <ul className="tasks-container">
        {todoList.map((item) => (
          <li className='tasks-item' key={item.id}>
            <span className="tasks-text" >{item.todo} </span>
            <button className="action-button" onClick={() => handleDelete(item.id)}>delete</button>
            <button className="action-button" onClick={() => {
              setEditToDo(item.id);
              setToDo(item.todo);
            }}>edit</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;