export interface ITypingTrainerInitialState {
  text: string
  userInput: string
  startTime: null | Date
  endTime: null | Date
  errors: number
  isCompleted: boolean
}

export interface CursorProps {
  text: string;
  length: number;
  fontSize: string;
}
