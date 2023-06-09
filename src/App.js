import { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { ToDoAdd } from './components/ToDoAdd';
import { useToDo } from './hooks/UseToDo';

function App() {
  
  const {ToDos,
    ToDosCount,
    pendingToDosCount,
    handleNewToDo,
    handleDeleteToDo,
    handleCompleteToDo,
    handleUpdateToDo} = useToDo();


  return (
   <>
     <div className='card-to-do'>
      <h1>Lista de Tareas</h1>
      <div className='counter-to-do'>
        <h3>Nº de Tareas: <span>{ToDosCount}</span></h3>
        <h3>Pendientes: <span>{pendingToDosCount}</span></h3>
      </div>

     <div className='add-to-do'>
      <h3>Agregar Tarea</h3>
      <ToDoAdd handleNewToDo={handleNewToDo} />
     </div>

     <ToDoList 
       ToDos={ToDos}
       handleCompleteToDo={handleCompleteToDo}
       handleDeleteToDo={handleDeleteToDo}
       handleUpdateToDo={handleUpdateToDo}
     />
     </div>


   
   </>
  );
}

export default App;
