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

function decks ( state = starterData, action) { 
  switch (action.type) {
    case types.ADD_DECK:
      return { 
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }
      }
    case types.LOAD_DECKS:
      return state
    case types.ADD_CARD:
      const { deckTitle, card } = action
      const mergedDeck = { ...state[deckTitle] }
      mergedDeck.questions = [...state[deckTitle].questions]
      mergedDeck.questions.push(card)
      return {
        ...state,
        [deckTitle]: mergedDeck
      }
    default:
      return state
  }
}

export default decks



/*

      return { decks: { 
        ...state.decks,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }}
      }


*/