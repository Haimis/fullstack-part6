
export const setNotification = (message, time) => { 
  return async dispatch => {
    dispatch({
      type: 'SET',
      message,
      time
      })
    setTimeout(() => {
      dispatch({
        type: 'SET',
        message: ''
        })
    }, 5000)
  }
}
  

const reducer = (state = '', action) => {

    switch (action.type) {
        case 'SET':
          console.log(action.message)
          return `${action.message}`
        default:
        return state
    }
  }
  
  export default reducer