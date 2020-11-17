import React, { useEffect, useState } from 'react'
import Form from '../form/Form'
import Header from '../header/Header'
import ToDoList from '../todoList/ToDoList'
import './App.css'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    switch (status) {
      case 'complited':
        setFiltered(todos.filter(todo => todo.complited === true))
        break
      case 'uncomplited':
        setFiltered(todos.filter(todo => todo.complited === false))
        break
      default:
        setFiltered(todos)
        break
    }
  }, [todos, status])
  
  return(
    <>
      <Header title='To-Do List' />
      <section>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <ToDoList todos={todos} setTodos={setTodos} filtered={filtered} />
      </section>
    </>
  )
}

export default App