import { TODOS_ACTION } from "./actionTypes";

interface TodoInterface {
  _id: string;
  title: string;
  status: boolean;
}

export const addTodos = (todo: TodoInterface): any => {
  return {
    type: TODOS_ACTION.ADD,
    payload: {
      ...todo
    }
  };
};

export const deleteTodos = (_id: string): any => {
  return {
    type: TODOS_ACTION.DELETE,
    payload: {
      _id
    }
  };
};
