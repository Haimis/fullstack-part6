import React from 'react'
import { connect } from 'react-redux'

import { handleVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const handleClick = (anecdote) => {
        props.handleVote(anecdote)
        props.setNotification(`You voted ${anecdote.content}`, 5)
    }

    return (
        <div>
            {props.visibleAnecdotes.map(anecdote => 
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => handleClick(anecdote)}>vote</button>
                </div>
            </div>
            )}
        </div>
    )
}


const anecdotesToShow = ({ anecdotes, filter }) => {
    if (filter.length === 0) {
        return anecdotes
    }
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()) )
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdotesToShow(state),
        filter: state.filter
    }
}

const mapDispatchToProps = {
    handleVote,
    setNotification
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList)