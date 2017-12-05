import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import DeckList from '../components/DeckList'
import Deck from '../components/Deck'
import DeckDetail from '../components/DeckDetail'
import AddDeck from '../components/AddDeck'
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'

const TabNav = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
},{
  animationEnabled: true,
  swipeEnabled: true,
  navigationOptions:{
    headerStyle:{
    },
    title: "UdaciCards"
  }
})

export const StackNav = StackNavigator({
  Home: {
    screen: TabNav
  },
  AddCard:{
    screen: AddCard,
    navigationOptions:{
      title: "Add Card"
    }
  },
  DeckList:{
    screen: DeckList
  },
  DeckDetail:{
    screen: DeckDetail
  },
  Quiz:{
    screen: Quiz,
    navigationOptions:{
      title: "Quiz"
    }
  },
})