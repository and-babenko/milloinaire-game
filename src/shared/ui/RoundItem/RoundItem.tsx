import React from 'react';
import styles from './RoundItem.module.css';

export type StatusValueType = 'future' | 'active' | 'passed';

type RoundProp = {
  children: number
  status: StatusValueType,
};

function RoundItem({ children, status }: RoundProp) {
  const calculateClassName = () => {
    if (status && status === 'active') return styles.active;
    if (status && status === 'passed') return styles.passed;
    return '';
  };

  return (
    <div className={`${styles.roundContainer} ${calculateClassName()}`}>
      <div className={styles.roundBorder}>
        <div className={styles.roundContent}>
          $
          {children}
        </div>
      </div>
    </div>
  );
}

export default RoundItem;
