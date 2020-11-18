import React from 'react'

const Input = ({ text, todos, todo, setTodos, editState, setEditState, inputElement }) => {
  const handlerBlur = () => {
    setEditState(!editState)
    setTodos(todos.map(item => (item.id === todo.id) ? {...item, text: inputElement.current.value} : item))
  }

  return (
    <div>
      <input
        type="text"
        defaultValue={text}
        ref={inputElement}
        onBlur={handlerBlur}
      />
      <div>
        <i className="material-icons delete">done</i>
      </div>
    </div>
  )
}

export default Input