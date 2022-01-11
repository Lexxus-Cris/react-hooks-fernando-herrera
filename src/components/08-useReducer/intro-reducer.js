
const initialState = [{
   id: 1,
   todo: 'Comprar leche',
   done: false
}];

const todoReducer = ( state = initialState ,action) => {

   // const { type, payload } = action
   // switch (type) {

   //    case type === 'todo/app':
   //       const addTodo = () => ([
   //          ...state,
   //          payload
   //       ])
   //       return addTodo()
   //    default:
   //       return state;
   // }

   if (action?.type === 'todo/add') {
      return [ ...state, action.payload]
   }

   return state;
};

let todos = todoReducer();

const newTodo = {
   id: 2,
   todo: "Comprar leche",
   done: false,
};

const action = {
   type: 'todo/add',
   payload: newTodo,
}

todos = todoReducer(todos, action);
console.log(todos);