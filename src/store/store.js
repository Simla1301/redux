import {createStore} from 'redux'

const initialState = {
  counter:0,
  toggle: false

};

 const counterReducer = (state = initialState, action) => {
   if (action.type === 'INCREMENT'){
    return{
     ...state, counter : state.counter + 1
   };
   }
   if(action.type === 'DECREMENT'){
    return {
      ...state , counter : state.counter - 1
    };
   }
   else if(action.type === 'TOGGLE'){
     return{
      ...state, toggle: !state.toggle
     }
   }
   return state;
 } 
   

 const Store = createStore(counterReducer);
 export default Store;