import React, { useContext } from 'react'
import { TodoContext } from './../contexts/TodoContext';

const Navbar = () => {
   const { todos } = useContext(TodoContext)
   return (
      <div className='navbar'>
         <h2>NDQ Todo List</h2>
         <p>Tất cả công việc {todos.length}</p>
      </div>
   )
}

export default Navbar
