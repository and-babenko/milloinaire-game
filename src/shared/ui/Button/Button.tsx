import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type BtnPropsType = {
  children: string
  direction: string;
};

function Button(props: BtnPropsType) {
  const { children, direction } = props;
  return (
    <Link to={direction} className={styles.button}>
      {children}
    </Link>
  );
}

export default Button;
