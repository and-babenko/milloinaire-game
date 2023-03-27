import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import AnswerItem from 'shared/ui/AnswerItem';
import { getQuestionById } from '../../store/questionsSlice';
import {
  getCurrentRound, updateLevel, getTotalRounds, startNewGame,
} from '../../store/rulesSlice';
import styles from './QuestionComponent.module.css';

const delayTimer = 1300;

function QuestionComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentRound = useSelector(getCurrentRound);
  const totalRounds = useSelector(getTotalRounds);

  const question = useSelector(getQuestionById(currentRound));
  const [chosen, setChosen] = useState(false); // For preventing reselection
  const [showAnswersColors, setAnswersColors] = useState(false); // Show answers colors trigger

  useEffect(() => {
    dispatch(startNewGame());
  }, []);

  const winnerChecker = (isCorrect: boolean) => {
    setTimeout(() => {
      setAnswersColors(false);
      setChosen(false);

      if (isCorrect) {
        dispatch(updateLevel());
      }

      if (!isCorrect || totalRounds === currentRound) {
        navigate('/results', { replace: true });
      }
    }, delayTimer);
  };

  const answersList = question.answers.map((item, index) => {
    const onAnswerClick = () => {
      if (!chosen) {
        setChosen(true);
        setTimeout(() => {
          winnerChecker(item.isCorrect);
          setAnswersColors(true);
        }, delayTimer);
      }
    };

    return (
      <AnswerItem
        key={item.text}
        isCorrect={item.isCorrect}
        showColor={showAnswersColors}
        idx={index}
        clickHandler={onAnswerClick}
      >
        {item.text}
      </AnswerItem>
    );
  });

  return (
    <>
      <div className={styles.questionTitle}>{question.text}</div>
      <div className={styles.answers}>
        {answersList}
      </div>
    </>
  );
}

export default QuestionComponent;
