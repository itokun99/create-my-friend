import { actionTypes } from './action';


const initialState = {
  all: []
};


const friend = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FRIEND:
      return {
        ...state,
        all: action.value
      }
    case actionTypes.CLEAR_FRIEND:
      return initialState;
    default:
      return state;
  }
}

export default friend;