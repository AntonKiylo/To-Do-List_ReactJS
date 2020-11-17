import React from 'react'
import ToDo from '../todo/ToDo'

const ToDoList = ({todos, setTodos, filtered}) => {
  const todoList = filtered.map(todo => {
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