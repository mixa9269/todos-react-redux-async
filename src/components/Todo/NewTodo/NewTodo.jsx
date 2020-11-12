import s from './NewTodo.module.scss';

const NewTodo = () => {
  return (
    <div className={s.root}>
      <input
        className={s.input}
        placeholder="What needs to be done?"
        autofocus
        input
      />
      <button className={s.toggleAll}>
        <div className={s.toggleAllContent}>❯</div>
      </button>
    </div>
  );
};

export default NewTodo;
