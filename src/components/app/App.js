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
  const [nightMode, setNightMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal =  JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }, [])

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
    
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos, status])

  return(
    <div className={`app ${nightMode ? 'nightMode' : ''}`}>
      <Header title='To-Do List' nightMode={nightMode} setNightMode={setNightMode} />
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
    </div>
  )
}

export default App