import React from 'react';
import { connect } from 'react-redux';

import InputField from './InputField';
import TodoActions from '../actions/TodoActions';

class CreateTodoFieldContainer extends React.Component {
  render() {
    return (
      <InputField
        placeholder="新增待辦清單"
        onSubmitEditing={this.props.createTodo}
      />
    );
  }
}

export default connect(undefined, {
  createTodo: TodoActions.createTodo
})(CreateTodoFieldContainer);
