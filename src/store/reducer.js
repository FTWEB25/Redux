import { DEC_COUNT, INC_COUNT } from "./actionTypes";
const initState = {
  counter: 45,
};

const reducer = (state=initState, { type, payload }) => {
    console.log(state,type,payload)
  switch (type) {
    case INC_COUNT:
      return {
        ...state,
        counter: state.counter + payload,
      };
    case DEC_COUNT:
      return {
        ...state,
        counter: state.counter - payload,
      };
    default:
      return state;
  }
};


export {reducer}