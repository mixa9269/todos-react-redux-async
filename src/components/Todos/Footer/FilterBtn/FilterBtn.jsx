import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './FilterBtn.module.scss';

const FilterBtn = ({ active, children }) => {
  return (
    <button className={cn(s.root, { [s.active]: active })}>{children}</button>
  );
};

FilterBtn.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
};

export default FilterBtn;
