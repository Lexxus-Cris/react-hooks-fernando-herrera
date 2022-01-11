import React from 'react'

import useCounter from '../../hooks/useCounter'

import './counter.css'

function CounterCustomHook() {

   const { state, increment, decrement, reset } = useCounter(200);

   return (
      <>
         <h1>Counter with custom hooks: { state }</h1>
         <hr/>

         <button type="btn" onClick={increment}> +1 </button>
         <button type="btn" onClick={ reset }> Reset </button>
         <button type="btn" onClick={decrement}> -1 </button>
      </>
   )
}

export default CounterCustomHook
