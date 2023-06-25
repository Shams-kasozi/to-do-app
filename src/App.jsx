import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoFrom } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {

  //Here the useState hook is checking the localStorage and getting the value if it exists
  //if it doesn't it just defaults to an empty array
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return[]
    return JSON.parse(localValue)
  })

  //the useEffect hook bellow doesn't return anything but it will help our data stay 
  //persistent even after a refresh by running the inside function every time the
  //items in the array change

  //So everytime we modify our todos, the function inside useEffect runs and saves the 
  //value inside of localStorage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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