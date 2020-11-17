import PropTypes from 'prop-types';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import s from './Todos.module.scss';

const Todos = ({
  collection,
  newTodo,
  activeCount,
  filter,
  onAddTodo,
  onNewTodoChange,
  onRemove,
  onCheck,
  onChangeFilter,
}) => {
  return (
    <section className={s.root}>
      <NewTodo
        value={newTodo}
        onInputChange={onNewTodoChange}
        onAddTodo={onAddTodo}
      />
      <TodoList collection={collection} onRemove={onRemove} onCheck={onCheck} />
      <Footer
        activeCount={activeCount}
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
    </section>
  );
};

Todos.propTypes = {
  newTodo: PropTypes.string.isRequired,
  activeCount: PropTypes.number.isRequired,
  collection: PropTypes.array,
  filter: PropTypes.string,
  onNewTodoChange: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Todos;
