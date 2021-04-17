import React, { useContext } from 'react'
import { TodoContext } from './../contexts/TodoContext'
import Todo from './Todo'

const TodoList = () => {
   const { todos } = useContext(TodoContext)

   return todos.length ? (<div className='todo-list'>
      <ul>
         {
            todos.map((todo) => (
               <Todo key={todo.id} todo={todo} />
            ))
         }
      </ul>
   </div>) : (<div className="empty">Không có công việc nào</div>)
}

export default TodoList
