## Udacity React Project 3 - UdaciCards

## Getting started
Please use yarn or npm version 4
```bash
npm install -g npm@4
npm install
npm start 
```

## Support
Application was tested on an iPhone SE running iOS 11 using Expo.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

##Requirements
iOS or Android: Selected iOS

Specific Requirements

    Use create-react-native-app to build your project.
    Allow users to create a deck which can hold an unlimited number of cards.
    Allow users to add a card to a specific deck.
    The front of the card should display the question.
    The back of the card should display the answer.
    Users should be able to quiz themselves on a specific deck and receive a score once they're done.
    Users should receive a notification to remind themselves to study if they haven't already for that day.


Views

Your application should have, at a minimum, five views.

  Deck List View (Default View)
    displays the title of each Deck
    displays the number of cards in each deck

  Individual Deck View
    displays the title of the Deck
    displays the number of cards in the deck
    displays an option to start a quiz on this specific deck
    An option to add a new question to the deck

  Quiz View
    displays a card question
    an option to view the answer (flips the card)
    a "Correct" button
    an "Incorrect" button
    the number of cards left in the quiz
    Displays the percentage correct once the quiz is complete

  New Deck View
    An option to enter in the title for the new deck
    An option to submit the new deck title

New Question View
    An option to enter in the question
    An option to enter in the answer
    An option to submit the new question



Data example: Suggested using Asyncstorage, but can use redux as an option.
https://facebook.github.io/react-native/releases/0.27/docs/asyncstorage.html

Notice each deck creates a new key on the object. Each deck has a title and a questions key. title is the title for the specific deck and questions is an array of questions and answers for that deck. 
{
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

To manage your AsyncStorage database, you'll want to create four different helper methods.

getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 