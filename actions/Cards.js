import * as types from './types'

export const addCard = ( deckTitle, card ) => ({
  type: types.ADD_CARD,
  deckTitle,
  card
})