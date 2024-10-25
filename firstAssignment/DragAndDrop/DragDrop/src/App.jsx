import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoColumn from './components/TodoColumn';

const initialTasks = {
  todo: ['Task 1', 'Task 2', 'Task 3'],
  inProgress: ['Task 4'],
  review: ['Task 5'],
  done: ['Task 6'],
  closed: []
};

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;


    if (source.droppableId === destination.droppableId && source.index === destination.index) return;


    const start = tasks[source.droppableId];
    const finish = tasks[destination.droppableId];


    if (start === finish) {
      const updatedList = Array.from(start);
      const [movedTask] = updatedList.splice(source.index, 1);
      updatedList.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: updatedList,
      }));
    } else {
   
      const startList = Array.from(start);
      const [movedTask] = startList.splice(source.index, 1);
      const finishList = Array.from(finish);
      finishList.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: startList,
        [destination.droppableId]: finishList,
      }));
    }
  };

  return (
    <div className="App">
      <h1>Drag and Drop Todo List</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <TodoColumn title="To Do" tasks={tasks.todo} columnId="todo" />
          <TodoColumn title="In Progress" tasks={tasks.inProgress} columnId="inProgress" />
          <TodoColumn title="Review" tasks={tasks.review} columnId="review" />
          <TodoColumn title="Done" tasks={tasks.done} columnId="done" />
          <TodoColumn title="Closed" tasks={tasks.closed} columnId="closed" />
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;
