import { actionTypes } from './action';


const initialState = null;


const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        ...action.value
      }
    default:
      return state;
  }
}

export default profile;