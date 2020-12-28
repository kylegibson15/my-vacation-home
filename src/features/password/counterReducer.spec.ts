import { SET_CORRECT_PASSWORD } from './actionTypes';
import passwordReducer from './passwordReducer';
import { PasswordActionTypes } from './types';

describe('features > counter > counterReducer', () => {
  it(`set password correct, if ${SET_CORRECT_PASSWORD} action is provided`, () => {
    const initialState = {
      isCorrect: false
    };

    const expectedState = {
      isCorrect: true
    };

    const action: PasswordActionTypes = {
      type: SET_CORRECT_PASSWORD
    };

    expect(passwordReducer(initialState, action)).toEqual(expectedState);
  });
});
