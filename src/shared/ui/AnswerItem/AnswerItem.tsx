import React, { useEffect, useRef, useState } from 'react';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showColors, setShowColors] = useState(false);
  const statusClassName = useRef<string>('');

  const getLetter = () => {
    let letterNumber = idx + 1;
    if (idx < 1) {
      letterNumber = 1;
    }
    const letterCode = letterNumber + 96;
    const letter = String.fromCharCode(letterCode);
    return letter;
  };

  useEffect(() => {
    if (showColor) {
      if (isCorrect) {
        statusClassName.current = styles.correct;
      } else {
        statusClassName.current = styles.wrong;
      }
      setShowColors(true);
    } else {
      statusClassName.current = '';
      setShowColors(false);
    }
  }, [showColor]);

  const onBtnClick = () => {
    statusClassName.current = styles.selected;
    clickHandler();
  };

  return (
    <button type="button" onClick={onBtnClick} className={`${styles.answerContainer} ${statusClassName.current}`}>
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
