import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebase = require('firebase');

    firebase.initializeApp({
      apiKey: 'AIzaSyDmf91Ecq2tiF88Tklxo3jKJ6bWry7Jc5s',
      authDomain: 'eazzy-authentication.firebaseapp.com',
      databaseURL: 'https://eazzy-authentication.firebaseio.com',
      projectId: 'eazzy-authentication',
      storageBucket: 'eazzy-authentication.appspot.com',
      messagingSenderId: '445320213600'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
