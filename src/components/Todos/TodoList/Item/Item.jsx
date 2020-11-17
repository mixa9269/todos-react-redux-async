import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Item.module.scss';

const Item = ({ id, title, completed, onRemove }) => {
  return (
    <li className={s.root}>
      <input className={s.checkbox} type="checkbox" />
      <label className={cn(s.label, { [s.checked]: completed })}>{title}</label>
      <button className={s.btnDestroy} onClick={() => onRemove(id)} />
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

export default Item;
