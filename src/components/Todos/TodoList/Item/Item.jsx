import PropTypes from 'prop-types';

import s from './Item.module.scss';

const Item = ({ title }) => {
  return (
    <li className={s.root}>
      <input className={s.checkbox} type="checkbox" />
      <label className={s.label}>{title}</label>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Item;
