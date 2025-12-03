import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "counter/increase":
      return state + action.payload;
    case "counter/decrease":
      return state - action.payload;
    default:
      return state; // Always return current state if no case matches
  }
};

export const store = createStore(counterReducer);
