import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
    const { totalTodos, completedTodos} = React.useContext(TodoContext);

    return (

        completedTodos === totalTodos ?
        <h1 className='TodoCounter'>
            Completaste todas las tareas!
        </h1>

        :

        <h1 className='TodoCounter'>
            
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
    )
};

export {TodoCounter};