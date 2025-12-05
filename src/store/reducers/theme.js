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
export default themeReducer