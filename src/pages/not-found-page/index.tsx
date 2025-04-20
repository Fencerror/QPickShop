import React from 'react';
import styles from './styles.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Страница не найдена!</p>
    </div>
  );
};
