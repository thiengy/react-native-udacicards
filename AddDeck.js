import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import { addDeck } from '../actions/Decks'

class AddDeck extends Component {
  state = {
    title: '',
  }
  
  submit = () => {
    const { title } = this.state
    const { addDeck } = this.props
    if (title !== '') {
      addDeck(title)
    }
    this.setState({ title: '' })
    this.props.navigation.navigate('DeckDetail', { deckTitle: title })
  }

  render() {
    return (
      <View>
        <Text style={styles.titleText}>What is the title of the deck?</Text>
        <TextInput 
          style={styles.title}
          placeholder={'Deck Title'}
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />
        <Button title={'Submit'} onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, { addDeck })(AddDeck)