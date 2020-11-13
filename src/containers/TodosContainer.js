import { useAction, useComponentDidMount } from 'hooks';
import { useSelector } from 'react-redux';
import { actions } from '@redux/todos/slice';
import { isFetchedSelector } from '@redux/todos/selectors';
import Todos from 'components/Todos';

const UsersContainer = () => {
  const fetchTodos = useAction(actions.fetchTodos);
  const isFetched = useSelector(isFetchedSelector);

  useComponentDidMount(() => {
    if (!isFetched) {
      fetchTodos();
    }
  });

  return <Todos />;
};

export default UsersContainer;
