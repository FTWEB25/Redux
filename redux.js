
const initialState = {
  count: 0,
  todo: [],
};

const reducerFunction = (state,{type,payload}) => {
    switch(type){
        case "ADD":
            return {
                ...state,
                count:state.count+payload
            }
        case "SUB":
            return{
                ...state,
                count:state.count-payload
            }
        
        case "RESET":
            return {
                ...state,
                count:0
            }
        
         default:
            return state
    }
};


class Store{
    constructor(reducer,state){
      this.reducer=reducer
      this.state=state
    }
    getState(){
        return this.state
    }

    dispatch(action){
        this.state=reducerFunction(this.state,action)
    }
}

const store=new Store(reducerFunction,initialState)

store.dispatch({type:"ADD",payload:5})
store.dispatch({type:"RESET"})
store.dispatch({type:"SUB",payload:8})
console.log(store.getState())
