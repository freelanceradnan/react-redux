import { combineReducers, createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "counter/increase":
      return state + action.payload;

    case "counter/decrease":
      return state - action.payload;

    default:
      return state;
  }
};

const initState = {
  bgColor: 'red',
  textColor: 'blue'
};

const changeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_BD":
      return {
        ...state,
        bgColor: action.payload
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,  
  theme: changeReducer
});

export const store = createStore(rootReducer);

