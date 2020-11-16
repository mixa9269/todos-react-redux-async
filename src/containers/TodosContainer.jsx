import { useAction, useComponentDidMount } from 'hooks';
import { useSelector } from 'react-redux';
import { actions } from '@redux/todos/slice';
import { isFetchedSelector, collectionSelector } from '@redux/todos/selectors';
import Todos from 'components/Todos';

const UsersContainer = () => {
  const fetchTodos = useAction(actions.fetchTodos);
  const isFetched = useSelector(isFetchedSelector);
  const collection = useSelector(collectionSelector);

  useComponentDidMount(() => {
    if (!isFetched) {
      fetchTodos();
    }
  });

  if (!isFetched) {
    return null;
  }

  return <Todos collection={collection} />;
};

export default UsersContainer;
