import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import Deck from './Deck'

class DeckList extends Component {
  state = {
    cardCount: 0
  }

  componentDidMount() {
    const { getDecks } = this.props
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressItem(item)}>
          <Deck deck={item}/>
      </TouchableOpacity>
    )
  }

  onPressItem = ( item ) => {
    this.props.navigation.navigate('DeckDetail', { deckTitle: item.title })
  }

  keyExtractor = ( item, index ) => item.title
  
  render() {
    const { decks } = this.props
    return (
      <FlatList
          style={styles.container} 
          data={decks} 
          extraData={this.state} 
          keyExtractor={this.keyExtractor} 
          renderItem={this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  item: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  }
})

function mapStateToProps ( state ) {
  const getDecks = (data) => {
    return Object.values(data).map( deck => ({ ...deck, key: deck.title }))
  }
  return {
    decks: getDecks(state)
  }
}

export default connect(mapStateToProps)(DeckList)