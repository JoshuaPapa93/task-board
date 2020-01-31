import React, { useState } from 'react';

import PersonCard from './PersonCard';

const Task = ({drag, task, personnel, checkedBox}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="task" draggable="true" onDragStart={() => drag(task.id)}>
            <h3>{task.name}</h3>
            <div className="assigned">
                <h4>Assigned:</h4>
                <button onClick={() => setShowDropdown(!showDropdown)}>
                    Add / Remove
                </button>
                {task.assignedTo.map(assignedTo =>
                    personnel.filter(person => person.id === assignedTo).map(person => (
                        <PersonCard 
                        key={person.id} 
                        name={person.name} 
                        department={person.department} />
                    ))
                )}
            </div>
            <div className={showDropdown ? 'dropdown show' : 'dropdown'}>
                <form>
                    {personnel.map(person => (
                        <label key={person.id}>
                            <input 
                            type="checkbox"
                            checked={task.assignedTo.indexOf(person.id) !== -1}
                            onChange={() => checkedBox(task.id, person.id)} />
                            <PersonCard
                            name={person.name}
                            department={person.department} />
                        </label>
                    ))}
                </form>
            </div>
        </div>
    )
};

export default Task;