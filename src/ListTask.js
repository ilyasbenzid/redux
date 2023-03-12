import React from 'react'
function ListTask({ tasks, filterBy, onToggleDone, onDelete, onEdit }) {
    const filteredTasks =
      filterBy === "done"
        ? tasks.filter((task) => task.isDone)
        : filterBy === "not"
        ? tasks.filter((task) => !task.isDone)
        : tasks;
  
    return (
      <ul>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    );
  }

export default ListTask
