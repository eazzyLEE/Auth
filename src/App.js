import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }


  componentWillMount() {
    const firebase = require('firebase');

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDmf91Ecq2tiF88Tklxo3jKJ6bWry7Jc5s',
        authDomain: 'eazzy-authentication.firebaseapp.com',
        databaseURL: 'https://eazzy-authentication.firebaseio.com',
        projectId: 'eazzy-authentication',
        storageBucket: 'eazzy-authentication.appspot.com',
        messagingSenderId: '445320213600'
      });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const firebase = require('firebase');

    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
            </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={style.SpinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const style = {
  SpinnerStyle: {
    flex: 1,
    marginTop: 240,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
