import s from './Todos.module.scss';
import NewTodo from './NewTodo';

const Todos = () => {
  return (
    <section className={s.root}>
      <NewTodo />
    </section>
  );
};

export default Todos;
