import React, { useReducer } from 'react';

import './stykles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
   id: new Date().getTime(),
   desc: 'Aprender React',
   done: false
}];



const TodoApp = () => {

   const [todos] = useReducer(todoReducer, initialState)

   const handleSubmit =(e) => {
      e.preventDefault();

      console.log('Nueva tarea');
   }

   return (
      <div>
         <h1>TodoApp ({todos.length})</h1>
         <hr />

         <div className="row">
            <div className="col-7">
               <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
            <li key={todo.id} className="list-group-item">
               <p className="text-center">
                  {i + 1}. {todo.desc}
               </p>
               <button
                  className='btn btn-danger'
               >borrar</button>
            </li>
            ))}
         </ul>
            </div>

            <div className="col-5">
               <h4>Agregar TODO</h4>
               <hr />

               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     name="description"
                     className="form-control"
                     placeholder="Aprender..."
                     autoComplete="off"
                     value=""
                  />
                  <button
                     type="submit"
                     className="btn btn-outline-primary mt-1 btn-block">
                     Agregar
                  </button>
               </form>
            </div>
         </div>

      </div>
   );
}

export default TodoApp
