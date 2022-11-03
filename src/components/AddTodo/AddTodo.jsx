import React from "react"

export default function AddTodo({addTodo}) {
  const addHandler = (e) => {
    e.preventDefault()
    const newTodo = e.target[0].value
    addTodo(newTodo)
  }
  return (
    <form onSubmit={addHandler}>
        <input type='text' placeholder="오늘 할 일"/>
        <button>추가</button>
    </form>
  )
}