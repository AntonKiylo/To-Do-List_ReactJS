import React from 'react'
import './ToDo.css'

const ToDo = ({text, todo, todos, setTodos}) => {
  const removeHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  const checkComplitingHandler = () => {
    setTodos(todos.map(item => (item.id === todo.id) ? {...item, complited: !item.complited} : item))
  }

  return(
    <div className='todo'>
      <div onClick={checkComplitingHandler}>
        <i className="material-icons">
          {todo.complited ? 'check_circle_outline' : 'radio_button_unchecked'}
        </i>
      </div>

      <li style={{'textDecoration': todo.complited ? 'line-through' : 'none'}} className='todo-text'>
        {text}
      </li>
      
      <div onClick={removeHandler}>
        <i className="material-icons">delete</i>
      </div>
    </div>
  )
}

export default ToDo