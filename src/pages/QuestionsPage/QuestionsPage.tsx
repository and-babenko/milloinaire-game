/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import React, { useState } from 'react';
import { RoundsComponent, QuestionComponent } from 'modules/QuestionModel';
import menu from 'shared/assets/imgs/Menu.svg';
import close from 'shared/assets/imgs/Close.svg';
import Footer from 'components/Footer';
import styles from './QuestionsPage.module.css';

function QuestionsPage() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const onSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div
        className={`${styles.questionsPage} ${
          sidebarVisible && styles.showSidebar
        }`}
      >
        <img
          tabIndex={0}
          src={sidebarVisible ? close : menu}
          alt="icon"
          className={styles.icon}
          onClick={onSidebarToggle}
          role="button"
        />

        <div className={styles.questionContainer}>
          <QuestionComponent />
        </div>

        <div className={styles.roundsContainer}>
          <RoundsComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QuestionsPage;
