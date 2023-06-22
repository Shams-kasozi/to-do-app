import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function hanleSubmit(event) {
    event.preventDefault()

    
    setTodos(currentTodos => {
      return [
        ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
  }

  return (
    <>
      <form onSubmit={hanleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Adding New Todo</label>
          <input 
          value={newItem}
          onChange={event => setNewItem(event.target.value)}
          type="text" 
          id="item"
          />
        </div>
        <button className="btn">Add to-do</button>
      </form>
      <h1 className="header">To-do list</h1>
      <ul className="list">
        {todos.map(todo => {
          return(
          <li>
            <label>
              <input type="checkbox" checked={todo.completed} />
              {todo.title}
            </label>
            <div>
              <span class="material-symbols-outlined">delete</span>
              <span class="material-symbols-outlined">edit</span>
              <span class="material-symbols-outlined">drag_pan</span>
            </div>
          </li>)
          })
        }
      </ul>
    </>
  )
}