import { ITypingTrainerInitialState } from "../../types/typingTrainer";

export const getUsersState = (
  state: unknown
) => (state as { typingTrainer: ITypingTrainerInitialState }).typingTrainer
