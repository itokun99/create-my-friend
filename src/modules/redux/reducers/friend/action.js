export const actionTypes = {
  SET_FRIEND: 'SET_FRIEND',
  CLEAR_FRIEND: 'CLEAR_FRIEND'
}


export const setFriend = value => ({
  type: actionTypes.SET_FRIEND,
  value
})


export const clearFriend = () => ({
  type: actionTypes.CLEAR_FRIEND
})