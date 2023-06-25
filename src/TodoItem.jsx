export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return(
        <li key="checkbox">
            <label>
              <input type="checkbox" checked={completed} 
              onChange={event => toggleTodo(id, event.target.checked)}
              />
              {title}
            </label>
            <div className="call-to-action">
              <span onClick={() => deleteTodo(id)} class="material-symbols-outlined">delete</span>
              <span class="material-symbols-outlined">edit</span>
              <span class="material-symbols-outlined">drag_pan</span>
            </div>
        </li>
    )
}