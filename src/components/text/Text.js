import React from 'react'
import './Text.css'

const Text = ({todo, todos, text, setTodos, editState, setEditState, showToDo, setShowToDo}) => {
  
  const removeHandler = () => {
    setShowToDo(!showToDo)

    setTimeout(() => {
      setTodos(todos.filter(item => item.id !== todo.id))
    }, 350)
  }

  const editHandler = () => {
    setEditState(!editState)
  }

  const checkComplitingHandler = () => {
    setTodos(todos.map(item => (item.id === todo.id) ? {...item, complited: !item.complited} : item))
  }

  return (
    <div className='text-wrapper'>
      <div onClick={checkComplitingHandler}>
        <i className="material-icons check">
          {todo.complited ? 'check_circle_outline' : 'radio_button_unchecked'}
        </i>
      </div>

      <li
        style={{ 'textDecoration': todo.complited ? 'line-through' : 'none' }}
        className='todo-text'
        onClick={editHandler}
      >
        {text}
      </li>

      <div onClick={editHandler}>
        <i className="material-icons edit">edit</i>
      </div>

      <div onClick={removeHandler}>
        <i className="material-icons delete">delete</i>
      </div>
    </div>
  )
}

export default Text