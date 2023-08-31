import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  const title = props.title;

  return (
    <header>
      <div className="container">
        <h2 className="title">{title}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'Default Title',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
