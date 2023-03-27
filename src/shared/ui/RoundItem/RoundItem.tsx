import React, { useEffect, useRef } from 'react';
import styles from './RoundItem.module.css';

export type StatusValueType = 'future' | 'active' | 'passed';

type RoundProp = {
  children: number
  status: StatusValueType,
};

function RoundItem({ children, status }: RoundProp) {
  const statusClassName = useRef<string>('');

  useEffect(() => {
    if (status === 'active') statusClassName.current = styles.active;
    if (status === 'passed') statusClassName.current = styles.passed;
  }, [status]);

  return (
    <div className={`${styles.roundContainer} ${statusClassName.current}`}>
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
