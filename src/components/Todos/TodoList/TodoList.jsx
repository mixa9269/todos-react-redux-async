import PropTypes from 'prop-types';

import Item from './Item';

import s from './TodoList.module.scss';

const TodoList = ({ collection }) => {
  return (
    <ul className={s.root}>
      {collection.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  collection: PropTypes.array,
};

export default TodoList;
