import { combineReducers, createStore } from 'redux';
const counterReducer=(state=0,action)=>{
switch(action.type){
  case "counter/increase":{
    return state+action.payload
  }
  case "counter/decrease":{
    return state-action.payload
  }
  default:{
    return state
  }
}
}
const initState={
  bgColor:"red",
  textColor:"blue",
}
const themeReducer=(state=initState,action)=>{
  switch(action.type){
    case "theme/CHANGE_BG":{
      return{
        ...state,
        bgColor:action.payload
      }
     
    }
    case "theme/CHANGE_TEXT":{
      return{
        ...state,
        textColor:action.payload
      }
      
    }
    case "theme/reset":{
      return initState
    }
    default:{
      return initState
    }
  }

}
const rootReducer=combineReducers({
  counter:counterReducer,
  theme:themeReducer
})
export const store=createStore(rootReducer)
