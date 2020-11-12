import s from './Todo.module.scss';
import NewTodo from './NewTodo';

const Todo = () => {
  return (
    <section className={s.root}>
      <NewTodo />
    </section>
  );
};

export default Todo;
