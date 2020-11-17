import React from 'react';
import PropTypes from 'prop-types';
import FilterBtn from './FilterBtn';
import { ALL, ACTIVE, COMPLETED } from 'consts';

import s from './Footer.module.scss';

const Footer = ({ activeCount, filter, onChangeFilter }) => {
  return (
    <footer className={s.root}>
      <span>
        {activeCount} item{activeCount === 1 ? '' : 's'} left
      </span>
      <div>
        <FilterBtn value={ALL} filter={filter} onClick={onChangeFilter}>
          All
        </FilterBtn>
        <FilterBtn value={ACTIVE} filter={filter} onClick={onChangeFilter}>
          Active
        </FilterBtn>
        <FilterBtn value={COMPLETED} filter={filter} onClick={onChangeFilter}>
          Completed
        </FilterBtn>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  activeCount: PropTypes.number.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default React.memo(Footer);
