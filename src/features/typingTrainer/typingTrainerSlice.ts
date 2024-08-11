import { createSlice } from '@reduxjs/toolkit';
import { ITypingTrainerInitialState } from '../../types/typingTrainer';
import { getRandomArrayValue } from '../../utils/arrays';
import { typingPracticeText } from '../../constants';

const initialState: ITypingTrainerInitialState = {
  text: getRandomArrayValue(typingPracticeText),
  userInput: "",
  startTime: null,
  endTime: null,
  errors: 0,
  isCompleted: false,
};

const typingSlice = createSlice({
  name: 'typing',
  initialState,
  reducers: {
    // актуализируем введенный текст
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    // начало теста
    startTest: (state) => {
      state.startTime = new Date();
    },
    // конец теста
    endTest: (state) => {
      state.endTime = new Date();
    },
    // прибавляем ошибку
    incrementErrors: (state) => {
      state.errors += 1;
    },
    // сбрасываем тренировку
    resetTest: (state) => {
      state.text = getRandomArrayValue(typingPracticeText);
      state.userInput = "";
      state.startTime = null;
      state.endTime = null;
      state.errors = 0;
      state.isCompleted = false
    },
    completeTest: (state) => {
      state.isCompleted = true;
    },
  },
});

export const {
  setUserInput,
  startTest,
  endTest,
  incrementErrors,
  resetTest,
  completeTest
} = typingSlice.actions;
export default typingSlice.reducer;
