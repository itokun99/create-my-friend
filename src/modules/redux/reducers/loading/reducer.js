import { actionTypes } from './action';

const initialState = {
  show: false
}

const loading = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        show: action.value
      }
    default:
      return state;
  }
}

export default loading;