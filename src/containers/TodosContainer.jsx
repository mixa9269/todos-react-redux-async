import { useAction, useComponentDidMount } from 'hooks';
import { useSelector } from 'react-redux';
import { actions } from '@redux/todos/slice';
import {
  isFetchedSelector,
  collectionSelector,
  newTodoSelector,
  activeCountSelector,
} from '@redux/todos/selectors';
import Todos from 'components/Todos';

const UsersContainer = () => {
  const fetchTodos = useAction(actions.fetchTodos);
  const pushTodo = useAction(actions.pushTodo);
  const changeNewTodo = useAction(actions.changeNewTodo);
  const deleteTodo = useAction(actions.deleteTodo);
  const isFetched = useSelector(isFetchedSelector);
  const collection = useSelector(collectionSelector);
  const newTodo = useSelector(newTodoSelector);
  const activeCount = useSelector(activeCountSelector);

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
      onAddTodo={pushTodo}
      onNewTodoChange={changeNewTodo}
      onRemove={deleteTodo}
    />
  );
};

export default UsersContainer;
