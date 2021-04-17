import React, { useContext, useState } from 'react'
import { TodoContext } from './../contexts/TodoContext';

const TodoForm = () => {
   const [name, setName] = useState('')
   const { dispatch } = useContext(TodoContext)
   const handleSubmit = (e) => {
      e.preventDefault()
      if (name.trim()) {
         dispatch({ type: 'ADD_TODO', todo: { name } })
      }
      setName('')
   }
   return (
      <form onSubmit={handleSubmit}>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Công việc" required />
         <input type="submit" value="Thêm công việc" />
      </form>
   )
}

export default TodoForm
