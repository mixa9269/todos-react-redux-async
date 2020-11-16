import PropTypes from 'prop-types';

import s from './NewTodo.module.scss';

const NewTodo = ({ value, onInputChange, onAddTodo }) => {
  return (
    <div className={s.root}>
      <input
        className={s.input}
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onAddTodo(value)}
      />
    </div>
  );
};

NewTodo.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default NewTodo;
