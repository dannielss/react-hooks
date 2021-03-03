import React, { useEffect, useReducer } from 'react';

const initialState = { 
  name: '',
  password: ''
}

type ActionType = {
  type: string,
  payload: any
}

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload }
    case 'password':
      return { ...state, password: action.payload }
    default:
      throw new Error();
  }
}

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <input value={state.name} onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} />
      <input value={state.password} onChange={(e) => dispatch({ type: 'password', payload: e.target.value })} />
    </>
  );
}

export default UseReducer;
