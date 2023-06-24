import { useState } from "react"
import "./styles.css"
import { NewTodoFrom } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  // const itemStyle = {textDecoration: completed ? 'line-through' : 'none',};
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  //the function to mark a finished todo, it returns 'completed' for only the selected todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  // the delete function, it only returns todos that do not have this particular ID
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  } 

  return (  
    <>
      < NewTodoFrom onSubmit={addTodo} />
      <h1 className="header">To-do list</h1>
      < TodoList todos= { todos } toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}