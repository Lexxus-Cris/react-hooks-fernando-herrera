import React, {useEffect} from 'react'

export const Message = () => {

   const mousemove = (e) => {
      console.log({ x: e.x, y: e.y });
   }

   useEffect(() => {
      console.log('Componente montado');
      window.addEventListener("mousemove", mousemove);
      return () => {
         console.log('Componente desmontado');
         window.removeEventListener("mousemove", mousemove);
      }
   }, []);

   return (
      <div>
         <h1>Hello Peter</h1>
      </div>
   )
}
