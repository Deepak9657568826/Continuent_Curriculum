import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
const TodoColumn = ({ title, tasks = [], columnId }) => {
    return (
      <div style={{ margin: '0 20px', width: '20%' }}>
        <h2>{title}</h2>
        <Droppable droppableId={columnId}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                background: '#f4f4f4',
                padding: '10px',
                minHeight: '200px',
                borderRadius: '4px',
              }}
            >
              {tasks.map((task, index) => (
                <TodoItem key={task} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  };
  
  
export default TodoColumn;
