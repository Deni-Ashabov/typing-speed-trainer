import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUsersState } from '../../../features/typingTrainer/selectors';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsText
} from './Statistics.styled';

const Statistics = () => {
  const {
    startTime,
    endTime,
    errors,
    text
  } = useSelector(state => getUsersState(state));

  const timeTaken = useMemo(() => {
    if (startTime && endTime) {
      return ((endTime as Date).getTime() - (startTime as Date).getTime()) / 1000 / 60;
    }

    return 0;
  }, [startTime, endTime]);

  const wordsTyped = useMemo(() => text.length / 5, [text]);

  const wpm = useMemo(() =>
    timeTaken > 0 ? Math.round(wordsTyped / timeTaken) : 0,
  [wordsTyped, timeTaken]);

  return (
    <StatisticsContainer>
      <StatisticsTitle>
        Statistics
      </StatisticsTitle>
      <StatisticsText>
        WPM: {wpm}
      </StatisticsText>
      <StatisticsText>
        Errors: {errors}
      </StatisticsText>
    </StatisticsContainer>
  );
};

export default React.memo(Statistics);
