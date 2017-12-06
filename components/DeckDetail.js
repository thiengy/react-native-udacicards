import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
  render() {
    const { deck, goTo } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleText}>{deck.title}</Text>
          <Text>{deck.questions.length} card(s)</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={'Quiz'}
            onPress={ () => goTo( 'Quiz' , deck.title )}
          >
          </Button>
          <Button
            title={'Add Card'}
            onPress={ () => goTo( 'AddCard' , deck.title )}
          >
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

function mapStateToProps(state, ownProps) {
  const { deckTitle } = ownProps.navigation.state.params
  return {
    decks: state,
    deck: state[deckTitle],
    }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { deckTitle } = ownProps.navigation.state.params

  return {
    goTo: ( screen, deck ) => ownProps.navigation.navigate( screen , { deckTitle: deck }),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( DeckDetail )