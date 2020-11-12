import Todo from 'components/Todo';
import { Provider } from 'react-redux';

import configureStore from '@redux/store';
import rootSaga from '@redux/sagas';

const store = configureStore();
store.runSaga(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
