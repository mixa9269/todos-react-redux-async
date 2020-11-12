import Todo from 'components/Todo';
import { Provider } from 'react-redux';

import configureStore from '@redux/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
