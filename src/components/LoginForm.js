import React, { Component } from 'react';
import { Text } from 'react-native';
//import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', loading: false };
  }

  onButtonPress() {
    const firebase = require('firebase');

    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSucccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSucccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection >
          <Input
            label="Email"
            placeholder="eazzyuser@gmail.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection >
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
