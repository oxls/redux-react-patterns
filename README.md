*This is useful to see how Redux can be used to store data, and how that data can be modified*

## Warning Obligatory 'todo' example... Seriously.

You should be able to see how the store is generated in the `src/index.js`. Which is then passed to all of the child components via the `Provider` function in Redux. Each component then has two choices, it can either provide mappings to the state (as seen in the `components/Todos.js`) which are then linked to the React component via the `connect` function in Redux. Or if you just want the component to dispatch actions (mostly for child components that are being fed data by a parent) you can just call the `connect` function without mappings and then `this.props.dispatch` is available so you can dispatch any actions (as seen in `Todo.js`).

The reducer, in `reducer/Todos.js`, is then just required to update the state, but it is important that you copy the state and modify (hence the use of the ES6 `Object.assign` functions), **not muting the existing state** << ***Bad antipattern stuff***. You can also see how adding items to an array requires duplicating the array (using more ES6 magic `var newArray = [...oldArray, any, new, object(s)]`). As well as removing the items.
