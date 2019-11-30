import React from 'react';
import Hello from '../../components/Hello';

// >>>>>>>>> Plain css
// import './HomePage.css';

// const HomePage = () => (
//   <div>
//     <h2 className='title'>Home Page</h2>
//     <Hello name="you are on the Home Page" />
//   </div>
// );
// <<<<<<<<< Plain css

// >>>>>>>>> css-modules
import styles from './HomePage.css';

const HomePage = () => (
  <div>
    <h2 className={styles.title}>Home Page</h2>
    <Hello name="you are on the Home Page" />
  </div>
);
// <<<<<<<<< css-modules

export default HomePage;
