import * as types from '../actions/types'

starterData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks ( state = { decks: starterData }, action) { 
  switch (action.type) {
    case types.ADD_DECK:
      return { decks: { 
        ...state.decks,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }}
      }
    case types.LOAD_DECKS:
      return state
    case types.ADD_CARD:
      const {question, answer} = action.card
      state.decks[action.deckTitle].questions.push({ question, answer })
      return state
    default:
      return state
  }
}

export default decks