import PropTypes from 'prop-types';

import NewTodo from './NewTodo';
import TodoList from './TodoList';

import s from './Todos.module.scss';

const Todos = ({ collection, newTodo, onAddTodo, onNewTodoChange }) => {
  return (
    <section className={s.root}>
      <NewTodo
        value={newTodo}
        onInputChange={onNewTodoChange}
        onAddTodo={onAddTodo}
      />
      <TodoList collection={collection} />
    </section>
  );
};

Todos.propTypes = {
  newTodo: PropTypes.string.isRequired,
  collection: PropTypes.array,
  onNewTodoChange: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default Todos;
