import { useEffect } from "react";

import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
   const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      password: '',
   });

   const { name, email, password } = formValues;

   useEffect(() => {
      console.log('Email cambio');
   }, [email])

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log(formValues);

   }

   return (
      <>
         <h1>FormWithCustomHook</h1>
         <hr />

         <form className="form-group" onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
               type="text"
               name="name"
               value={name}
               onChange={handleInputChange}
               className="form-control"
               placeholder="Tu nombre"
               autoComplete="off"
            />

            <input
               type="email"
               name="email"
               value={email}
               onChange={handleInputChange}
               className="form-control"
               placeholder="Tu email"
               autoComplete="off"
            />

            <input
               type="password"
               name="password"
               value={password}
               onChange={handleInputChange}
               className="form-control"
               placeholder="*****"
               autoComplete="off"
            />
            <button type="submit" className="btn btn-primary">Enviar Info</button>
         </form>

      </>
   );
};
