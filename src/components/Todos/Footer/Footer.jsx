import PropTypes from 'prop-types';
import FilterBtn from './FilterBtn';

import s from './Footer.module.scss';

const Footer = ({ activeCount }) => {
  return (
    <footer className={s.root}>
      <span>
        {activeCount} item{activeCount === 1 ? '' : 's'} left
      </span>
      <div>
        <FilterBtn active>All</FilterBtn>
        <FilterBtn>Active</FilterBtn>
        <FilterBtn>Completed</FilterBtn>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
};

export default Footer;
