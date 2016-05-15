import React from 'react';

export default class InputField extends React.Component {
  static propTypes = {
    onSubmitEditing: React.PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.state = { value: props.value || '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
    const {
      onKeyDown,
      onSubmitEditing
    } = this.props;
    const { value } = this.state;
    switch (e.keyCode) {
      case 13:
        if (value.trim()) {
          onSubmitEditing && onSubmitEditing(value);
        }
        this.setState({ value: '' });
        break;
    }
    onKeyDown && onKeyDown(e);
  }

  render() {
    return (
      <input
        {...this.props}
        type="text"
        value={this.state.value}
        onChange={::this.handleChange}
        onKeyDown={::this.handleKeyDown}
      />
    );
  }
}
