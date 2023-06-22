import "./styles.css"

export default function App() {
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input types="text" id="item"/>
      </div>
      <button className="btn">Add to-do</button>
    </form>
    <h1 className="header">My to-do list</h1>
    <ul className="list">
      <li className="myTo-dos">
        <div className="to-do">
          <div>
            <label>
              <input type="checkbox" />
              item 1
            </label>
          </div>
          <div>
            <span class="material-symbols-outlined">delete</span>
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">drag_pan</span>
          </div>
        </div>
        <div className="to-do">
          <div>
            <label>
              <input type="checkbox" />
              item 1
            </label>
          </div>
          <div>
            <span class="material-symbols-outlined">delete</span>
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">drag_pan</span>
          </div>
        </div>
        <div className="to-do">
          <div>
            <label>
              <input type="checkbox" />
              item 1
            </label>
          </div>
          <div>
            <span class="material-symbols-outlined">delete</span>
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">drag_pan</span>
          </div>
        </div>
      </li>
    </ul>
    </>
  )
}