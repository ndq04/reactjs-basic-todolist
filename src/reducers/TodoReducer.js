import { v4 as uuid4 } from 'uuid'
export const TodoReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [...state, { name: action.todo.name, id: uuid4() }]
      case 'REMOVE_TODO':
         return state.filter(todo => todo.id !== action.id)
      case 'CHECK_TODO':
         return state.map(todo => {
            if (todo.id === action.id) {
               return {
                  ...todo, checked: !todo.checked
               }
            }
            return todo
         })
      case 'CHECKALL_TODO':
         return state.map(todo => {
            return {
               ...todo, checked: !todo.checked
            }
         })
      default:
         return state;
   }
}