
export const increase=(payload)=>{
    return{
        type:"counter/increase",
        payload:payload
    }
}
export const decrease=(payload)=>{
    return{
        type:"counter/decrease",
        payload:payload
    }
}