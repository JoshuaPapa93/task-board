import React from 'react';

const TaskColumn = (props) => (
    <div 
    className="column" 
    onDragOver={props.dragOver} 
    onDrop={(e) => props.drop(e, props.columnName)}>
        <h2>{props.columnName}</h2>
        {props.children}
    </div>
)

export default TaskColumn;