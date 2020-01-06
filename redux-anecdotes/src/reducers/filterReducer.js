export const setFilter = (filter) => { 
    return {
      type: 'SETVALUE',
      data: { filter }
    }
}


const reducer = (state = '', action) => {

    switch (action.type) {
        case 'SETVALUE':
          return action.data.filter
        default:
        return state
    }
  }
  
  export default reducer