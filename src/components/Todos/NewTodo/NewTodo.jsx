import s from './NewTodo.module.scss';

const NewTodo = () => {
  return (
    <div className={s.root}>
      <input className={s.input} placeholder="What needs to be done?" />
    </div>
  );
};

export default NewTodo;
