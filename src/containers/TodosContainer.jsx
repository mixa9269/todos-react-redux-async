import { useAction, useComponentDidMount } from 'hooks';
import { useSelector } from 'react-redux';
import { actions } from '@redux/todos/slice';
import {
  isFetchedSelector,
  filtredListSelector,
  newTodoSelector,
  activeCountSelector,
  filterSelector,
} from '@redux/todos/selectors';
import Todos from 'components/Todos';

const UsersContainer = () => {
  const fetchTodos = useAction(actions.fetchTodos);
  const pushTodo = useAction(actions.pushTodo);
  const changeNewTodo = useAction(actions.changeNewTodo);
  const deleteTodo = useAction(actions.deleteTodo);
  const checkTodo = useAction(actions.checkTodo);
  const setFilter = useAction(actions.setFilter);

  const isFetched = useSelector(isFetchedSelector);
  const collection = useSelector(filtredListSelector);
  const newTodo = useSelector(newTodoSelector);
  const activeCount = useSelector(activeCountSelector);
  const filter = useSelector(filterSelector);

  useComponentDidMount(() => {
    if (!isFetched) {
      fetchTodos();
    }
  });

  if (!isFetched) {
    return null;
  }

  return (
    <Todos
      collection={collection}
      newTodo={newTodo}
      activeCount={activeCount}
      filter={filter}
      onAddTodo={pushTodo}
      onNewTodoChange={changeNewTodo}
      onRemove={deleteTodo}
      onCheck={checkTodo}
      onChangeFilter={setFilter}
    />
  );
};

export default UsersContainer;
