import React, {useEffect} from 'react'
import './Input.css'

const Input = ({ text, todos, todo, setTodos, editState, setEditState, inputElement }) => {
  useEffect(() => {
    inputElement.current.focus()
  }, [inputElement])
  
  const handlerBlur = () => {
    setEditState(!editState)
    setTodos(todos.map(item => (item.id === todo.id) ? {...item, text: inputElement.current.value} : item))
  }

  const handlerKeyDown = e => {
    if (e.keyCode === 13) {
      handlerBlur()
    }
  }

  return (
    <div className='input-wrapper'>
      <input
        type="text"
        defaultValue={text}
        ref={inputElement}
        onBlur={handlerBlur}
        onKeyDown={handlerKeyDown}
      />
      <div>
        <i className="material-icons done">done</i>
      </div>
    </div>
  )
}

export default Input