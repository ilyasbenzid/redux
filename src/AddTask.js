import React from 'react'
function AddTask({ onAdd }) {
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (description.trim() === "") {
        return;
      }
      onAdd({ id: Date.now(), description: description, isDone: false });
      setDescription("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }

export default AddTask
