import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './FilterBtn.module.scss';

const FilterBtn = ({ children, value, filter, onClick }) => {
  return (
    <button
      className={cn(s.root, { [s.active]: filter === value })}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
};

FilterBtn.propTypes = {
  children: PropTypes.any,
  filter: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(FilterBtn);
