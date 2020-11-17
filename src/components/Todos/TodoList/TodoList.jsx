import PropTypes from 'prop-types';

import Item from './Item';

import s from './TodoList.module.scss';

const TodoList = ({ collection, onRemove }) => {
  return (
    <ul className={s.root}>
      {collection.map((item) => (
        <Item key={item.id} onRemove={onRemove} {...item} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  collection: PropTypes.array,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
