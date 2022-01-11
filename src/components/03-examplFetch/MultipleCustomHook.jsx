import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import useCounter from '../../hooks/useCounter';

import './effects.css'

const MultipleCustomHook = () => {

   const { state, increment, decrement } = useCounter();

   const API_URL = `https://www.breakingbadapi.com/api/quotes/${state}`;

   const {loading, data} = useFetch(API_URL);

   const { author, quote } = !!data && data[0];

   console.log(loading);

   return (
      <div>
         <h1>BreakingBad Quotes</h1>
         <hr />

      {loading ? (
         <div className="alert alert-info text-center">Loading...</div>
         ) : (
            <blockquote cite="" className="blockquote text-end">
            <p className="mb-2">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
            {state > 1 ? (
               <button
                  className="btn btn-primary"
                  type="button"
                  onClick={decrement}
               >
                  Prev
               </button>
            ) : (
               <button
                  className="btn btn-primary"
                  type="button"
                  onClick={decrement}
                  disabled
               >
                  Prev
               </button>
            )}

            <button
               className="btn btn-primary"
               type="button"
               onClick={increment}
            >
               Next
            </button>
            </blockquote>
         )}
      </div>
   );
}

export default MultipleCustomHook;
