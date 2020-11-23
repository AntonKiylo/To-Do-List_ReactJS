import React, { useEffect, useState } from 'react'
import Form from '../form/Form'
import Header from '../header/Header'
import ToDoList from '../todoList/ToDoList'
import './App.css'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [viewStatus, setViewStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
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
    switch (viewStatus) {
      case 'complited':
        setFilteredTodos(todos.filter(todo => todo.complited === true))
        break
      case 'uncomplited':
        setFilteredTodos(todos.filter(todo => todo.complited === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
    
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos, viewStatus])

  return(
    <div className={`app ${nightMode ? 'nightMode' : ''}`}>
      <Header title='To-Do List' nightMode={nightMode} setNightMode={setNightMode} />
      <section>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setViewStatus={setViewStatus}
        />
        <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </section>
    </div>
  )
}

export default App