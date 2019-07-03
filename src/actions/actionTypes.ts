interface TodosActionInterface {
  ADD: string;
  UPDATE: string;
  DELETE: string;
  TOGGLE: string;
}

export const TODOS_ACTION: TodosActionInterface = {
  ADD: "ADD_TODOS",
  UPDATE: "UPDATE_TODOS",
  DELETE: "DELETE_TODOS",
  TOGGLE: "TOGGLE_TODOS"
};
