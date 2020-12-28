import { SystemState } from './types';

export const getIsPasswordCorrect = (state: SystemState) => {
  return state.password.isCorrect;
};
