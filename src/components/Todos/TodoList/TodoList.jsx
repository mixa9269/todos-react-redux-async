import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import s from './TodoList.module.scss';

const TodoList = ({ collection, onRemove, onCheck }) => {
  return (
    <ul className={s.root}>
      {collection.map((item) => (
        <Item key={item.id} onRemove={onRemove} onCheck={onCheck} {...item} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  collection: PropTypes.array,
  onRemove: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default React.memo(TodoList);
