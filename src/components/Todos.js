import React from 'react';
import {connect} from 'react-redux';

import { addTodo } from '../actions/TodoActions';

import Todo from './Todo';

const mapStateToProps = (state) => {
  return {
    todos: state.Todos.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo: (todo) => {
      dispatch(addTodo(todo));
    }
  }
}

class TodosComponent extends React.Component{
  addTodo(e) {
    e.preventDefault();
    this.props.addTodo(this.refs.input.value);
    this.refs.input.value = '';
  }
  render() {
    var todos = this.props.todos.map(function(todo, i) {
      return <Todo key={`todo_${i}`} todo={todo} />
    });
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="heading">
              <h1 className="title">Todos</h1>
            </div>
            <form onSubmit={this.addTodo.bind(this)} >
              <p className="control has-addons">
                  <input className="input" ref="input" type="text" placeholder="What do you want to add to your list?" />
                  <input type="submit" value="Add" className="button is-success" />
              </p>
            </form>
          </div>
        </section>
        <section className="section" style={{'background': '#f5f7fa'}}>
          <div className="container">
          {todos}
          </div>
        </section>
      </div>
    );
  }
}

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosComponent);

export default Todos;
