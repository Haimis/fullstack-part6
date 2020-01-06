import anecdoteService from '../services/anecdotes'

export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const handleVote = (anecdote) => { 
  return async dispatch => {
    const anecdoteToVote ={
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const votedAnecdote = await anecdoteService.update(anecdote.id, anecdoteToVote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })


  }
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}


const reducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      const unSortedAnecdotes = state.map(anecdote =>
          anecdote.id !== action.data.id ? anecdote : action.data
      )
      return unSortedAnecdotes.sort(function (a, b) {
          return b.votes - a.votes
      })
      case 'INIT_ANECDOTES':
        return action.data
    default:
      return state
  }
}

export default reducer