export const actionTypes = {
  SET_POPUP: 'SET_POPUP',
  CLEAR_POPUP: 'CLEAR_POPUP'
}

export const setPopup = value => ({
  type: actionTypes.SET_POPUP,
  value
})


export const clearPopup = () => ({
  type: actionTypes.CLEAR_POPUP
})