import React, { useContext } from 'react'
import { FaTimes, FaCheckCircle } from 'react-icons/fa'
import { TodoContext } from './../contexts/TodoContext';

const Todo = ({ todo }) => {
   const { dispatch } = useContext(TodoContext)
   return (
      <li className={todo.checked ? "checked" : ""}>
         <span className="name">{todo.name}</span>
         <div className="btn" onClick={() => (window.confirm('Do you want to continue ?') && dispatch({ type: 'REMOVE_TODO', id: todo.id }))} >
            <div className="btn-remove"><FaTimes /></div>
         </div>
         <div className="check" onClick={() => dispatch({ type: 'CHECK_TODO', id: todo.id })}>
            <FaCheckCircle className={todo.checked ? 'icon active' : 'icon'} />
         </div>
      </li>
   )
}

export default Todo
