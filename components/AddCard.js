import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import { addCard } from '../actions/Cards'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  
  submit = () => {
    const { question, answer } = this.state
    const { addCard } = this.props
    if (question !== '' && answer !== '') {
      addCard(this.props.navigation.state.params.deckTitle, this.state)
    }
    this.setState({ question: '', answer: '' })
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text style={styles.titleText}>Question:</Text>
        <TextInput 
          style={styles.title}
          placeholder={'Question'}
          value={this.state.question}
          onChangeText={(text) => this.setState({ question: text })}
        />
        <Text style={styles.titleText}>Answer:</Text>
        <TextInput 
          style={styles.title}
          placeholder={'Answer'}
          value={this.state.answer}
          onChangeText={(text) => this.setState({ answer: text })}
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

export default connect(mapStateToProps, { addCard })(AddCard)