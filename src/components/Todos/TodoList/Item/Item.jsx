import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Item.module.scss';

const Item = ({ title, completed }) => {
  return (
    <li className={s.root}>
      <input className={s.checkbox} type="checkbox" />
      <label className={cn(s.label, { [s.checked]: completed })}>{title}</label>
      <button className={s.btnDestroy} />
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};

export default Item;
