import React from 'react';
import styles from './Home.module.scss';
import { Sortbar } from '../../components';

const Home = () => {
  return (
    <div className={styles.container}>
      <Sortbar />
    </div>
  );
};

export default Home;
