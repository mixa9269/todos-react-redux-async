import PropTypes from 'prop-types';

import s from './Footer.module.scss';

const Footer = ({ activeCount }) => {
  return (
    <footer className={s.root}>
      <span>
        {activeCount} item{activeCount === 1 ? '' : 's'} left
      </span>
    </footer>
  );
};

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
};

export default Footer;
