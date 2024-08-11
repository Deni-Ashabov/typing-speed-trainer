import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetTest } from '../../features/typingTrainer/typingTrainerSlice';
import Statistics from './Statistics/Statistics';
import TextDisplay from './TextDisplay/TextDisplay';
import { ResetButton } from './MainContent.styled';
import { getUsersState } from '../../features/typingTrainer/selectors';

const MainContent = () => {
  const dispatch = useDispatch()
  const { isCompleted } = useSelector(state => getUsersState(state));

  const handleReset = useCallback(() => {
    dispatch(resetTest());
  }, [dispatch]);

  return (
    <>
      {!isCompleted ? <TextDisplay /> : <Statistics />}
      <ResetButton
        onClick={handleReset}
      >
        Reset train
      </ResetButton>
    </>
  );
};

export default MainContent;
