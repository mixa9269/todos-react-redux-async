import PropTypes from 'prop-types';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import s from './Todos.module.scss';

const Todos = ({
  collection,
  newTodo,
  activeCount,
  onAddTodo,
  onNewTodoChange,
  onRemove,
}) => {
  return (
    <section className={s.root}>
      <NewTodo
        value={newTodo}
        onInputChange={onNewTodoChange}
        onAddTodo={onAddTodo}
      />
      <TodoList collection={collection} onRemove={onRemove} />
      <Footer activeCount={activeCount} />
    </section>
  );
};

Todos.propTypes = {
  newTodo: PropTypes.string.isRequired,
  activeCount: PropTypes.number.isRequired,
  collection: PropTypes.array,
  onNewTodoChange: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Todos;
