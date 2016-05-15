import React from 'react';

export default class TodoHeader extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
  };

  static defaultProps = {
    title: '我的待辦清單',
    username: 'Guest',
    todoCount: 0
  };

  render() {
    const {
      title,
      username,
      todoCount
    } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <span>哈囉，{username}：你有 {todoCount} 項未完成待辦事項</span>
      </div>
    );
  }
}
