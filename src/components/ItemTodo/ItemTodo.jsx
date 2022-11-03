import React, { useReducer } from 'react';
import styles from './ItemTodo.module.css'
import {FaTrashAlt} from 'react-icons/fa'

export default function ItemTodo({todo, deleteTodo, checkTodo}) {
  // const deleteHandler = 
  // addTodo 상태에 있는거 제거 해야함... 
  // 리듀서 사용해야하나?
  const deleteHandler = () => {
    deleteTodo(todo)
  }
  const checkHandler = () => {
    checkTodo(todo)
  }


  return (
    <li 
      className={styles.todo}
    >
      <input type='checkbox' id='checkbox' onChange={checkHandler} />
      <label htmlFor='checkbox'>{todo.name}</label>
      <button onClick={deleteHandler}>
        <FaTrashAlt/>
      </button>
    </li>
  );
}

