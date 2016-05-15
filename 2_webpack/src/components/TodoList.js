import React from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.object.isRequired,
    onUpdateTodo: React.PropTypes.func,
    onToggleTodo: React.PropTypes.func,
    onDeleteTodo: React.PropTypes.func
  };

  render() {
    const {
      todos,
      onUpdateTodo,
      onToggleTodo,
      onDeleteTodo
    } = this.props;
    const todoElements = todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onUpdate={(content) => onUpdateTodo && onUpdateTodo(todo.id, content)}
          onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
        />
      </li>
    ));
    return <ul>{todoElements}</ul>;
  }
}
