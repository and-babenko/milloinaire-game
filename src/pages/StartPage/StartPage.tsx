import React, { useEffect, useState } from 'react';

import hand from 'shared/assets/imgs/hand.svg';
import Button from 'shared/ui/Button';
import Spinner from 'shared/ui/Spinner';
import {
  getPrize,
  getQuestions, getRules, questionsSelector, rulesSelector,
} from 'modules/QuestionModel';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import styles from './StartPage.module.css';

function HeaderText({ path }: { path: string }): JSX.Element {
  const totalPrize = useSelector(getPrize);
  if (path === '/results') {
    return (
      <div>
        <p className={styles.subtitle}>Total score:</p>
        <h1 className={styles.title}>
          $
          {`${totalPrize} `}
          earned
        </h1>
      </div>
    );
  }
  return <h1 className={styles.title}>Who wants to be a millionaire?</h1>;
}

function ButtonWithText({ path }: { path: string }): JSX.Element {
  if (path === '/results') {
    return <Button direction="/questions">Try Again</Button>;
  }
  return <Button direction="/questions">Start</Button>;
}

function StartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const { loadingIndicator: questionLoader } = useSelector(questionsSelector);
  const { loadingIndicator: rulesLoader } = useSelector(rulesSelector);
  const [combinedLoading, setCombinedLoading] = useState('');

  useEffect(() => {
    setCombinedLoading('');
    // Looks awfull, i know >_<
    if (questionLoader === 'rejected' || rulesLoader === 'rejected') {
      setCombinedLoading('rejected');
      navigate('/error');
    }
    if (questionLoader === 'pending' || rulesLoader === 'pending') {
      setCombinedLoading('pending');
    }
    if (questionLoader === 'completed' && rulesLoader === 'completed') {
      setCombinedLoading('completed');
    }
  }, [
    questionLoader,
    rulesLoader,
  ]);

  useEffect(() => {
    dispatch(getRules());
    dispatch(getQuestions());
  }, []);

  return (
    <div className={styles.startPage}>
      {combinedLoading === 'pending' ? <Spinner /> : ''}
      <div className={styles.container}>
        <img src={hand} className={styles.image} alt="Millionaire Game" />
        <div className={styles.content}>
          <HeaderText path={location} />
          <ButtonWithText path={location} />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
