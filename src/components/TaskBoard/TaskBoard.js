import React, { useState } from 'react';

import TaskColumn from './TaskColumn';
import Task from './Task/Task';

const TaskBoard = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                name: 'design the home page',
                assignedTo: [],
                column: 'backlog'
            },
            {
                id: 2,
                name: 'organise a client meeting',
                assignedTo: [],
                column: 'backlog'
            },
            {
                id: 3,
                name: 'Develop the home page',
                assignedTo: [],
                column: 'backlog'
            },
            {
                id: 4,
                name: 'manage social media accounts',
                assignedTo: [],
                column: 'backlog'
            },
            {
                id: 5,
                name: 'think of a fifth task',
                assignedTo: [],
                column: 'backlog'
            }
        ]
    );

    const personnel = [
        {
            id: 1,
            name: 'matt roy',
            department: 'design'
        },
        {
            id: 2,
            name: 'esther lloyd',
            department: 'development'
        },
        {
            id: 3,
            name: 'gerardo lopez',
            department: 'development'
        },
        {
            id: 4,
            name: 'essie taylor',
            department: 'design'
        },
        {
            id: 5,
            name: 'jon marshall',
            department: 'design'
        },
        {
            id: 6,
            name: 'louis fletcher',
            department: 'development'
        },
        {
            id: 7,
            name: 'jody bishop',
            department: 'development'
        },
        {
            id: 8,
            name: 'laverne patrick',
            department: 'design'
        },
        {
            id: 9,
            name: 'patrick olson',
            department: 'design'
        },
        {
            id: 10,
            name: 'geraldine santos',
            department: 'development'
        }
    ];

    let draggedTask;
    const onDragHandler = (id) => {
        draggedTask = id;
    };

    const onDragOverHandler = (e) => {
        e.preventDefault();
    };

    const onDropHandler = (e, targetColumn) => {
        e.preventDefault();

        const taskIndex = tasks.findIndex(task => task.id === draggedTask);

        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[taskIndex] = {
                ...tasks[taskIndex],
                column: targetColumn
            };

            return updatedTasks;
        });
    };

    const checkedPersonHandler = (taskId, personId) => {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        const assignedToIndex = tasks[taskIndex].assignedTo.indexOf(personId);

        let updatedAssignments;
        if (assignedToIndex === -1) {
            updatedAssignments = [...tasks[taskIndex].assignedTo, personId];
        }
        else {
            updatedAssignments = [...tasks[taskIndex].assignedTo];
            updatedAssignments.splice(assignedToIndex, 1);
        }
        
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[taskIndex] = {
                ...tasks[taskIndex],
                assignedTo: updatedAssignments
            };

            return updatedTasks
        })
    };

    return (
        <div className="task-board">
            <TaskColumn
            dragOver={onDragOverHandler}
            drop={onDropHandler} 
            columnName="backlog">
                {tasks.filter(task => task.column === "backlog").map(task => 
                    <Task 
                    key={task.id} 
                    drag={onDragHandler} 
                    task={task} 
                    personnel={personnel} 
                    checkedBox={checkedPersonHandler} />
                )}
            </TaskColumn>
            <TaskColumn
            dragOver={onDragOverHandler}
            drop={onDropHandler} 
            columnName="in progress">
                {tasks.filter(task => task.column === "in progress").map(task => 
                    <Task 
                    key={task.id} 
                    drag={onDragHandler} 
                    task={task} 
                    personnel={personnel} 
                    checkedBox={checkedPersonHandler} />
                )}
            </TaskColumn>
            <TaskColumn
            dragOver={onDragOverHandler}
            drop={onDropHandler} 
            columnName="completed">
                {tasks.filter(task => task.column === "completed").map(task => 
                    <Task 
                    key={task.id} 
                    drag={onDragHandler} 
                    task={task} 
                    personnel={personnel} 
                    checkedBox={checkedPersonHandler} />
                )}
            </TaskColumn>
        </div>
    )

}

export default TaskBoard;