import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { StyleSheet, View  } from 'react-native';
import { StackNav } from './navigation/navigation'

//const store = createStore(reducer);
const store = createStore(reducer, devToolsEnhancer());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StackNav />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});