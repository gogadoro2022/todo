import React, { useReducer, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import todoReducer from './reducer/todo-reducer';
import Header from './components/Header/Header';

export default function AppTodo() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos)
  const addTodo = (add) => {
    dispatch({ type: 'add', add })
  }
  const deleteTodo = (deleting) => {
    dispatch({ type: 'delete', deleting })
  }
  const checkTodo = (checkedItem) => {
    dispatch({ type: 'check', checkedItem })
  }
  // const filterAll = () => {
  //   dispatch({ type: 'filterAll' })
  // }
  // const filterTodo = () => {
  //   dispatch({ type: 'filterTodo' })
  // }
  // const filterDone = () => {
  //   dispatch({ type: 'filterDone' })
  // }

  const status = ['all', 'done', 'would']
  const [filterStatus, setFilterStatus] = useState(status[0])
  const changeStatus = (currentStatus) => {
    setFilterStatus(currentStatus)
  }

  return (
    <>
      <Header
        status={status}
        changeStatus={changeStatus}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        checkTodo={checkTodo}
        filterStatus={filterStatus}
      />
      <AddTodo addTodo={addTodo} />
    </>
  );
}

let initialTodos = [
  {
    id: '123',
    name: '장보기',
    status: 'would',
  },
  {
    id: '11224',
    name: '밥먹기',
    status: 'would'
  }
]
