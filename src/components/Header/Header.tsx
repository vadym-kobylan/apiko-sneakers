import React from 'react';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

import logoSvg from '../../assets/logofull.svg';
import likeSvg from '../../assets/like.svg';
import cartSvg from '../../assets/cart.svg';
import ArrowIcon from '../../assets/ArrowIcon';

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={logoSvg} alt="Apiko logo" />
        </Link>
        <div className={styles.headerMenu}>
          <div className={styles.likeCartButtonWrapper}>
            <Link to="/favorites">
              <img src={likeSvg} alt="favorite" />
            </Link>
            <Link to="/cart">
              <img src={cartSvg} alt="cart" />
            </Link>
          </div>

          {/* <div className={styles.authButtonWrapper}>
            <button className={styles.authButton}>Register</button>
            <div className={styles.separator} />
            <button className={styles.authButton}>Log In</button>
          </div> */}

          <div className={styles.userMenu}>
            <p>Welcome, Tony!</p>
            <div className={styles.imageWrapper}>TS</div>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
