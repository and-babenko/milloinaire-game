import React, { useState } from 'react';
import styles from './AnswerItem.module.css';

type AnswerItemPropsType = {
  children: string;
  idx: number;
  isCorrect: boolean;
  showColor: boolean;
  clickHandler: () => void
};

function AnswerItem(props: AnswerItemPropsType) {
  const {
    children, idx, isCorrect, showColor, clickHandler,
  } = props;

  const [isActive, setActive] = useState(false);

  const getLetter = () => {
    let letterNumber = idx + 1;
    if (idx < 1) {
      letterNumber = 1;
    }
    const letterCode = letterNumber + 96;
    const letter = String.fromCharCode(letterCode);
    return letter;
  };

  const isCorrectClass = () => {
    if (isActive && !showColor) return styles.selected;
    if (showColor && isCorrect) return styles.correct;
    if (showColor && !isCorrect) return styles.wrong;
    return '';
  };

  const onBtnClick = () => {
    setActive(true);
    clickHandler();
  };

  return (
    <button
      type="button"
      onClick={onBtnClick}
      className={`${styles.answerContainer} ${isCorrectClass()}`}
    >
      <div className={styles.answerBorder}>
        <div className={styles.answerContent}>
          <b>{getLetter()}</b>
          {children}
        </div>
      </div>
    </button>
  );
}

export default AnswerItem;
