import { TODOS_ACTION } from "../actions/actionTypes";

interface Todos {
  _id: number;
  title: string;
  status: boolean;
}

export default (state: Array<Todos> = [], action: any): Array<Todos> => {
  switch (action.type) {
    case TODOS_ACTION.ADD:
      return [...state, action.payload];
    case TODOS_ACTION.TOGGLE:
      return state.filter(val => {
        return val._id === action.payload._id
          ? {
              ...val,
              status: action.payload.status
            }
          : val;
      });
    case TODOS_ACTION.DELETE:
      return state.filter(val => val._id !== action.payload._id);
    default:
      return state;
  }
};
