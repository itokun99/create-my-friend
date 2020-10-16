import { actionTypes } from './action';

const initialState = {
  title: '',
  show: false,
  buttonLeftTitle: 'Ok',
  buttonRightTitle: '',
  onClickLeftButton: null,
  onClickRightButton: null
}

const popup = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POPUP:
      return {
        ...state,
        ...action.value
      }
    case actionTypes.CLEAR_POPUP:
      return initialState;
    default:
      return state
  }
}

export default popup;