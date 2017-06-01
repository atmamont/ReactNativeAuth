import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA0i1ycBUz_CnQJ5O2EOwmolFHDHYnUxsQ',
      authDomain: 'rnauth-1ba30.firebaseapp.com',
      databaseURL: 'https://rnauth-1ba30.firebaseio.com',
      projectId: 'rnauth-1ba30',
      storageBucket: 'rnauth-1ba30.appspot.com',
      messagingSenderId: '1079926124985'
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
