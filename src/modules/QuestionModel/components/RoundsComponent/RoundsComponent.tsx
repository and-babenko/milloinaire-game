import React from 'react';
import { useSelector } from 'react-redux';
import RoundItem, { StatusValueType } from 'shared/ui/RoundItem';
import styles from './RoundsComponent.module.css';
import { getCurrentRound, getTotalRounds, getRoundPrizes } from '../../store/rulesSlice';

function RoundsComponent() {
  const currentRound = useSelector(getCurrentRound);
  const totalRounds = useSelector(getTotalRounds);
  const prizesArr = useSelector(getRoundPrizes);

  const roundsList = prizesArr
    .slice(1, totalRounds + 1)
    .map((item, idx) => {
      let itemStatus: StatusValueType = 'future';
      if (idx < currentRound) itemStatus = 'passed';
      if (idx === currentRound) itemStatus = 'active';

      return (<RoundItem key={item} status={itemStatus}>{item}</RoundItem>);
    })
    .reverse();

  return (
    <div className={styles.roundsComponent}>
      {roundsList}
    </div>
  );
}

export default RoundsComponent;
