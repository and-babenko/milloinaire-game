import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type BtnPropsType = {
  children: string
  direction: string;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void
};

function Button(props: BtnPropsType) {
  const { children, direction, onClick } = props;
  return (
    <Link to={direction} onClick={onClick} className={styles.button}>
      {children}
    </Link>
  );
}

export default Button;
