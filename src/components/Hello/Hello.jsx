import React from 'react';
import PropTypes from 'prop-types';

// >>>>>>>>> Plain css
// import './Hello.css';

// const Hello = ({ name }) => (
//   <div>Hello <b className='name'>{name}</b></div>
// );
// <<<<<<<<< Plain css

// >>>>>>>>> css-modules
import styles from './Hello.css';

const Hello = ({ name }) => (
  <div>Hello <b className={styles.name}>{name}</b></div>
);
// <<<<<<<<< css-modules

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
