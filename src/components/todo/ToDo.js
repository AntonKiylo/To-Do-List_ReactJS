import React, { useEffect, useRef, useState } from 'react'
import Text from '../text/Text'
import Input from '../input/Input'
import './ToDo.css'

const ToDo = ({text, todo, todos, setTodos}) => {
  const [editState, setEditState] = useState(false)
  const inputElement = useRef(null)

  /* useEffect(() => {
    inputElement.current.focus()
  }, [inputElement]) */

  return(
      <div className='todo'>
        {
          editState
          ?
          <Input setTodos={setTodos} text={text} editState={editState} setEditState={setEditState} inputElement={inputElement} todo={todo} todos={todos} />
          :
          <Text text={text} inputElement={inputElement} todo={todo} todos={todos} setTodos={setTodos} editState={editState} setEditState={setEditState} />
        }
      </div>

  )
}

export default ToDo