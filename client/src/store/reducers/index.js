const initState = {
  patient: {}
}

function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'PATIENT_LOGIN_SUCCESS': {
      return {
        ...state,
        patient: action.user
      }
    }
    default:
      return state
  }
}

export default rootReducer;