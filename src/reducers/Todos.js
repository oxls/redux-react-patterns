import * as Actions from '../actions/TodoActions';

export default function Todos(state={
  todos: [],
  idx: 0
}, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return Object.assign({}, state, { idx: state.idx + 1, todos: [...state.todos, {text: action.todo, idx: state.idx}]});
      break;
    case Actions.REMOVE_TODO:
      return Object.assign({}, state, { todos: [...state.todos].filter(function(todo){
        return(todo.idx != action.todo.idx)
      }) });
    default:
      return state;
  }
}
