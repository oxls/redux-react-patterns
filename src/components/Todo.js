import React from 'react';
import {connect} from 'react-redux';

import { removeTodo } from '../actions/TodoActions';

class Todo extends React.Component{
  removeTodo() {
    this.props.dispatch(removeTodo(this.props.todo));
  }
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={`https://api.adorable.io/avatars/96/${encodeURIComponent(this.props.todo.idx)}`} style={{'borderRadius': '50%'}} alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <h2 className="subtitle" style={{'marginBottom': '2px'}}>
                <strong>{this.props.todo.text}</strong>
              </h2>
            </div>
          </div>
          <div className="media-right">
            <a className="delete" onClick={this.removeTodo.bind(this)}>
            </a>
          </div>
        </article>
      </div>
    );
  }
}

export default connect()(Todo);
