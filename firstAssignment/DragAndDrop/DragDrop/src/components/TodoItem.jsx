import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({ task, index }) => {
    return (
      <Draggable draggableId={`${task}-${index}`} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              padding: '10px',
              margin: '5px 0',
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              ...provided.draggableProps.style,
            }}
          >
            {task}
          </div>
        )}
      </Draggable>
    );
  };
  

export default TodoItem;
