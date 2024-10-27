import React from 'react';

type CounterState = number;

export const useCounter = (initialState: CounterState = 0) => {
  const [state, setState] = React.useState(initialState);
  const increment = () => setState(state + 1);
  const decrement = () => setState(state - 1);
  const reset = () => setState(0);
  const doubleCount = state * 2;
  return { state, increment, decrement, doubleCount, reset };
};
