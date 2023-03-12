
import { useState } from 'react';
import './App.css';
function App({ id, description, isDone, onToggleDone, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleToggleDone = () => {
    onToggleDone(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDescription(description);
  };
  return (
    <div className="App">
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
            {description}
          </span>
          <button onClick={handleToggleDone}>{isDone ? "Undo" : "Done"}</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
    </div>
  );
}

export default App;
