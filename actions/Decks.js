import * as types from './types'

export const addDeck = ( deckTitle ) => ({
  type: types.ADD_DECK,
  deckTitle
})

export const loadDecks = ( decks ) => ({
  type: types.LOAD_DECKS,
  decks
})