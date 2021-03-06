import React from 'react';

import InputField from './InputField';

export default class TodoItem extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onUpdate: React.PropTypes.func,
    onToggle: React.PropTypes.func,
    onDelete: React.PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.state = { editable: false };
  }

  toggleEditMode() {
    this.setState({ editable: !this.state.editable });
  }

  renderViewMode() {
    const {
      title,
      completed,
      onToggle,
      onDelete
    } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle && onToggle(!completed)}
        />
        <span onDoubleClick={::this.toggleEditMode}>{title}</span>
        <button onClick={() => onDelete && onDelete()}>x</button>
      </div>
    );
  }

  renderEditMode() {
    const { title, onUpdate } = this.props;
    return (
      <InputField
        autoFocus
        placeholder="編輯待辦事項"
        value={title}
        onBlur={::this.toggleEditMode}
        onKeyDown={(e) => {
          if (e.keyCode === 27) {
            e.preventDefault();
            this.toggleEditMode();
          }
        }}
        onSubmitEditing={(content) => {
          onUpdate && onUpdate(content);
          this.toggleEditMode();
        }}
      />
    );
  }

  render() {
    return this.state.editable ?
      this.renderEditMode() :
      this.renderViewMode();
  }
}
