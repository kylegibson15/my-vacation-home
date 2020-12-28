import { SET_CORRECT_PASSWORD } from './actionTypes';
import { PasswordActionTypes } from './types';

const initialState = {
  isCorrect: false
};

export default (state = initialState, action: PasswordActionTypes) => {
  switch (action.type) {
    case SET_CORRECT_PASSWORD:
      return { ...state, isCorrect: true };
    default:
      return state;
  }
};
