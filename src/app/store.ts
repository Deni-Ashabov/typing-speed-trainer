import { configureStore } from '@reduxjs/toolkit';
import typingTrainerReducer from '../features/typingTrainer/typingTrainerSlice';

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredPaths: ["typingTrainer.startTime", "typingTrainer.endTime"],
  }
}
export const store = configureStore({
  reducer: {
    typingTrainer: typingTrainerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig)
});

export default store;
