import { TodoCounter } from '../components/TodoCounter/index.js';
import { TodoSearch } from '../components/TodoSearch/index.js';
import { TodoList } from '../components/TodoList/index.js';
import { TodoItem } from '../components/TodoItem/index.js';
import { TodosLoading } from '../components/TodosLoading/index.js';
import { EmptyTodos } from '../components/EmptyTodos/index.js';
import { CreateTodoButton } from '../components/CreateTodoButton/index.js';
import { TodoContext } from '../TodoContext/index.js'
import { Modal } from '../Modal'
import { TodoForm } from '../components/TodoForm/index.js'
import React from 'react';


function AppUI() {
    const {
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <>
    <TodoCounter 
    // completed={completedTodos} 
    // total={totalTodos}
    />
    <TodoSearch 
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    />

    <TodoList>
        {loading &&(
            <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            </>
        ) }
        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

        {searchedTodos.map (todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
        ))}
    </TodoList>

    <CreateTodoButton
        setOpenModal = {setOpenModal}/>

    {openModal && (
        <Modal>
            <TodoForm/>
        </Modal>
    )}
    </>
    )
}

export { AppUI };