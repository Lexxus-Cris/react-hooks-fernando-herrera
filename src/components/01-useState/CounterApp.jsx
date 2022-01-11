import React, { useState } from 'react';

import './counter.css';

const CounterApp = () => {

   const [counter, setCounter] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30,
      counter4: 40,
   });

   const { counter1, counter2 } = counter;


   // const sumar  = () =>{

   //    // const sumatoria = counter1 +  1

   //    setCounter({ counter1: sumatoria, counter2 });
   // }

   return (
      <>
         <h1>Counter 1 {counter1}</h1>
         <h1>Counter 2 {counter2}</h1>
         <hr />

         {/* <button type="" className="btn btn-primary" onClick={sumar}>
            +1
         </button> */}

         <button type=""
            className="btn btn-primary"
            onClick={() => setCounter({
               ...counter,
               counter1: counter1 + 1,
            })}>
            +1
         </button>
      </>
   );
}

export default CounterApp
