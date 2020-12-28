import { SET_CORRECT_PASSWORD } from './actionTypes';

interface SetCorrectPasswordAction {
  type: typeof SET_CORRECT_PASSWORD;
}

export type PasswordActionTypes = SetCorrectPasswordAction;

export interface SystemState {
  password: {
    isCorrect: boolean;
  };
}
