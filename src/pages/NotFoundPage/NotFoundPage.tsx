import React from 'react';
import hand from 'shared/assets/imgs/hand.svg';
import Button from 'shared/ui/Button';

import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.NotFoundPage}>
      <div className={styles.container}>
        <img src={hand} className={styles.image} alt="Millionaire Game" />
        <div className={styles.content}>
          <h1 className={styles.title}>Something went wrong</h1>
          <Button direction="/">Go to main page</Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
