import React from 'react';
import ItemTodo from './ItemTodo/ItemTodo';
import Todo from './ItemTodo/ItemTodo';

export default function TodoList({ todos, deleteTodo, checkTodo, filterStatus }) {
  const filteredTodos = getFilteredTodos(todos, filterStatus)
  return (
    <ul>
      {filteredTodos.map((todo) => {
        return (
          <ItemTodo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        )
      })}
    </ ul>
  );
}

function getFilteredTodos(todos, filterStatus) {
  if (filterStatus === 'all') {
    return todos
  }
  return todos.filter((item) => item.status === filterStatus)
}