import React, { useRef, useState } from 'react'
import Text from '../text/Text'
import Input from '../input/Input'
import './ToDo.css'

const ToDo = ({text, todo, todos, setTodos}) => {
  const [editState, setEditState] = useState(true)
  const [showToDo, setShowToDo] = useState(true)
  const inputElement = useRef(null)

  return(
      <div className={`todo ${showToDo ? 'todo-in' : 'todo-out'}`}>
        {
          editState
          ?
          <Text showToDo={showToDo} setShowToDo={setShowToDo} text={text} inputElement={inputElement} todo={todo} todos={todos} setTodos={setTodos} editState={editState} setEditState={setEditState} />
          :
          <Input setTodos={setTodos} text={text} editState={editState} setEditState={setEditState} inputElement={inputElement} todo={todo} todos={todos} />
        }
      </div>

  )
}

export default ToDo