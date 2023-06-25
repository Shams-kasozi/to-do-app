import { useState } from "react"

export function NewTodoFrom({onSubmit}) {
    
    const [newItem, setNewItem] = useState("")

    function hanleSubmit(event) {
        event.preventDefault()

        // this if-statement checks if something has been typed in the input field
        if (newItem === "") return

        onSubmit(newItem)

        //this function sets the input field blank once the submit button has been clicked
        setNewItem("")
    }

    return(
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
        <button className="btn">Add a task</button>
      </form>
    )
}