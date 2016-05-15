import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import TodoActions from '../actions/TodoActions';

class TodoListContainer extends React.Component {
  render() {
    const {
      todos,
      updateTodo,
      toggleTodo,
      deleteTodo
    } = this.props;
    return (
      <TodoList
        todos={todos}
        onUpdateTodo={updateTodo}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    );
  }
}

export default connect(
  (state) => ({ todos: state.todos }),
  {
    updateTodo: TodoActions.updateTodo,
    toggleTodo: TodoActions.toggleTodo,
    deleteTodo: TodoActions.deleteTodo
  }
)(TodoListContainer);
