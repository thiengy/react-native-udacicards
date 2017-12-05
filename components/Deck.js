import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Deck extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >{deck.title}</Text>
        <Text>{deck.questions.length} card(s)</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Deck