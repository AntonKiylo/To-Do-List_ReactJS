import React from 'react'
import './Form.css'

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const inputChangeHandler = e => {
    setInputText(e.target.value)
  }
  
  const onHandlerSubmit = e => {
    e.preventDefault()
    
    if (inputText.trim()) {
      setTodos([
        ...todos,
        {
          text: inputText,
          complited: false,
          id: new Date().getTime()
        }
      ])
  
      setInputText('')
    } else {
      return
    }
    
  }

  const handlerStatus = e => {
    setStatus(e.target.value)
  }

  return(
    <form onSubmit={ onHandlerSubmit }>
      <div type='submit' onClick={onHandlerSubmit}>
        <i className="material-icons add-todo">add</i>
      </div>
      <input
        type="text"
        placeholder='NEW TASK'
        className='todo-input'
        value={inputText}
        onChange={ inputChangeHandler }
      />
      <select name='todos' className='select-todo' onChange={handlerStatus}>
        <option value='all'>All</option>
        <option value='complited'>Complited</option>
        <option value='uncomplited'>Uncomplited</option>
      </select>
    </form>
  )
}

export default Form