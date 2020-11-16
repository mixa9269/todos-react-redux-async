import PropTypes from 'prop-types';

import NewTodo from './NewTodo';
import TodoList from './TodoList';

import s from './Todos.module.scss';

const Todos = ({ collection }) => {
  return (
    <section className={s.root}>
      <NewTodo />
      <TodoList collection={collection} />
    </section>
  );
};

Todos.propTypes = {
  collection: PropTypes.array,
};

export default Todos;
