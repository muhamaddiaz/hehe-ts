import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import * as uuid from "uuid";

import { addTodos, deleteTodos } from "../actions";

interface CompProps {
  addTodos: any;
  deleteTodos: any;
  todos: Array<Todo>;
}
interface Todo {
  _id: string;
  title: string;
  status: boolean;
}
interface FormData {
  title: string;
}

class App extends React.Component<
  CompProps & InjectedFormProps<FormData, CompProps>
> {
  renderInput: Function = ({ input }): any => {
    return <input type="text" {...input} />;
  };

  handleFormSubmit = (input): void => {
    const todo: Todo = {
      _id: uuid.v4(),
      title: input.title,
      status: false
    };

    this.props.addTodos(todo);
  };

  handleDeleteTodo = (_id: string): void => {
    this.props.deleteTodos(_id);
  };

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <h3>Hello Todos</h3>
        {this.props.todos.length > 0 && (
          <ul>
            {this.props.todos.map(val => (
              <li key={val._id}>
                {val.title}
                <button
                  onClick={() => {
                    this.handleDeleteTodo(val._id);
                  }}
                >
                  delete me
                </button>
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field type="text" name="title" component={this.renderInput} />
          <button type="submit">handle submit</button>
        </form>
      </div>
    );
  }
}

const form = reduxForm<FormData, CompProps>({
  form: "todo_form"
})(App);

export default connect(
  (state: any) => ({
    todos: state.todos
  }),
  {
    addTodos,
    deleteTodos
  }
)(form);
