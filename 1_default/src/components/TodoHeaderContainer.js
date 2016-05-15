import React from 'react';
import { connect } from 'react-redux';

import TodoHeader from './TodoHeader';

class TodoHeaderContainer extends React.Component {
  render() {
    return (
      <TodoHeader
        title="我的待辦清單"
        username="Jason"
        todoCount={this.props.todos.filter((todo) => !todo.completed).size}
      />
    );
  }
}

export default connect(
  (state) => ({ todos: state.todos })
)(TodoHeaderContainer);
