import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'

class Quiz extends Component {
  state = {
    answersRight: 0,
    currentCard: 0,
    nextCard: 0,
    renderAnswer: false,
    completed: false
  }

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  restartQuiz = () => {
    this.setState({
      answersRight: 0,
      currentCard: 0,
      nextCard: 0,
      renderAnswer: false,
      completed: false
      })
  }

  markRight = () => {
    const { questions } = this.props.deck
    const nextCard = this.state.currentCard + 1
    
    if(nextCard < questions.length) {
      this.setState({ currentCard: this.state.currentCard + 1 })
    }else{
      this.setState({ completed: true})
    }
    this.setState({ answersRight: this.state.answersRight + 1})
    this.setState({ renderAnswer: false })
  }

  markWrong = () => {
    const { questions } = this.props.deck
    const nextCard = this.state.currentCard + 1
    
    if(nextCard < questions.length) {
      this.setState({ currentCard: this.state.currentCard + 1 })
    }else{
      this.setState({ completed: true})
    }
    this.setState({ renderAnswer: false })
  }

  showAnswer = () => {
    this.setState({ renderAnswer: true })
  }

  goBack = () => {
    this.props.navigation.goBack()
  }
  
  render() {
    const { currentCard, answersRight, renderAnswer, completed } = this.state
    const { questions, title } = this.props.deck
    const { question, answer } = questions[currentCard]
    if(completed === true) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Score: {(answersRight/questions.length) * 100}%</Text>
          <Text style={styles.bodyText}>You answered {answersRight} out {questions.length} question(s) correctly.</Text>
          <Text style={styles.bodyText}>Thanks for Playing!</Text>
          <Button title={'Restart Quiz'} onPress={this.restartQuiz}/>
          <Button title={'Exit'} onPress={this.goBack}/>
        </View>
      )
  }else{
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Topic: {title}</Text>
        <Text style={styles.bodyText}>Questions: {currentCard + 1} of {questions.length}</Text>
        <Text style={styles.titleText}>Question:</Text>
        <Text style={styles.bodyText}>{question}</Text>
        {renderAnswer === true &&
          <View>
            <Text style={styles.titleText}>Answer:</Text>
            <Text style={styles.bodyText}>{answer}</Text>
          </View>
        }
        {renderAnswer === false &&
          <Button title={'Show Answer'} onPress={this.showAnswer}/>
        }
        <View style={styles.buttonContainer}>
          <Button title={'Incorrect'} onPress={this.markWrong}/>
          <Button title={'Correct'} onPress={this.markRight}/>
        </View>
        <Button title={'Exit'} onPress={this.goBack}/>
      </View>
    )
  }
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
  },
  bodyText: {
    fontStyle: 'italic'
  }
})

function mapStateToProps(state, ownProps) {
  const { deckTitle } = ownProps.navigation.state.params
  
  return {
    deck: state[deckTitle],
  }
}

export default connect(mapStateToProps)(Quiz)