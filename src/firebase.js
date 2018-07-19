import firebase from 'firebase';

const config = {

  apiKey: 'AIzaSyDmf91Ecq2tiF88Tklxo3jKJ6bWry7Jc5s',
  authDomain: 'eazzy-authentication.firebaseapp.com',
  databaseURL: 'https://eazzy-authentication.firebaseio.com',
  projectId: 'eazzy-authentication',
  storageBucket: 'eazzy-authentication.appspot.com',
  messagingSenderId: '445320213600'
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
