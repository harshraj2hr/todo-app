import React from 'react'

const TaskForm = ({handleSubmit, todo, setToDo, editTodoId}) => {
  return (
    <>
        <form className="todo-item" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setToDo(e.target.value)} />
          <button className="action-button" type="submit">{(editTodoId !== null) ? "edit" : "add"}</button>
        </form>
    </>
  )
}

export default TaskForm
