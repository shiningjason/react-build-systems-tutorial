import React from 'react';
import { connect } from 'react-redux';

import CreateTodoFieldContainer from './CreateTodoFieldContainer';
import TodoHeaderContainer from './TodoHeaderContainer';
import TodoListContainer from './TodoListContainer';
import TodoActions from '../actions/TodoActions';

class TodoApp extends React.Component {
  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <div>
        <TodoHeaderContainer />
        <CreateTodoFieldContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default connect(undefined, {
  loadTodos: TodoActions.loadTodos
})(TodoApp);
