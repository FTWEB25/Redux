import { INC_COUNT, DEC_COUNT } from "./actionTypes";

const incCounter = (payload) => {
  return { type: INC_COUNT, payload };
};

const decCounter = (payload) => {
  return { type: DEC_COUNT, payload };
};

export { incCounter, decCounter };
