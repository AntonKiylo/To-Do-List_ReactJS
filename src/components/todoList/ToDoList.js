import React from 'react'
import ToDo from '../todo/ToDo'
import './ToDoList.css'

const ToDoList = ({todos, setTodos, filteredTodos}) => {
  const todoList = filteredTodos.map(todo => {
    return(
      <ToDo
        todo={todo}
        key={todo.id}
        text={todo.text}
        todos={todos}
        setTodos={setTodos}
      />
    )
  })

  return(
    <div className="todo-list-container">
      <ul className='todo-list'>{ todoList }</ul>
    </div>
  )
}

export default ToDoList