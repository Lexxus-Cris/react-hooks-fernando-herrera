import {useState, useEffect} from 'react';

import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

   const [ formState, setFormState ] = useState({
      name: '',
      email: '',
   });

   const { name, email } = formState;

   const handleInputChange = (e) => {
      setFormState({
         ...formState,
         [e.target.name] : e.target.value
      })
   }

   // Se ejecuta cuando se renderiza el componente
   useEffect(() => {
      console.log("Hey");
   }, []);
   //
   useEffect(() => {
      console.log("formState cambio");
   }, [formState]);

   return (
      <>
         <h1>useEffect</h1>
         <hr />

         <form className="form-group">
            <label>Nombre</label>
            <input
               type="text"
               name="name"
               value={name}
               onChange={ handleInputChange }
               className="form-control"
               placeholder="Tu nombre"
               autoComplete="off"
            />

            <input
               type="email"
               name="email"
               value={email}
               onChange={ handleInputChange }
               className="form-control"
               placeholder="Tu email"
               autoComplete="off"
            />
         </form>

         { name === '123' && <Message />}

      </>
   )
}
