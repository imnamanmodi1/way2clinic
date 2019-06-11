
const URL = 'http://localhost:8000'
const actions = {
  googleOAuth2: () => {
    return dispacth => {
      fetch(`${URL}/auth/google`, {
        method: 'GET',
        mode: 'no-cors'
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (Object.keys(data).length) {
          dispacth({
            type: 'PATIENT_LOGIN_SUCCESS',
            user: data.user
          })
        }
        console.log(data)
      })
    }
  } 
}

export default actions;