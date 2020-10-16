export const actionTypes = {
  SET_PROFILE: 'SET_PROFILE',
  CLEAR_PROFILE: 'SET_PROFILE',
}



export const setProfile = value => ({
  type: actionTypes.SET_PROFILE,
  value
})

export const clearProfile = () => ({
  type: actionTypes.CLEAR_PROFILE
})