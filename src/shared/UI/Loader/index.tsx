import React from 'react';
import styles from './styles.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
