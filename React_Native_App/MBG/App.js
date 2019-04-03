

import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, AsyncStorage } from 'react-native';
import firebase from 'firebase'; //Objects are not valid as react child was due to firebase version use  --npm install --save firebase@5.0.3 --
import { connect } from 'react-redux';
import AuthNav from './src/routes/AuthRoute';
import MainNav from './src/routes/AppRoute';
import FirebaseConfig from './src/configs/FirebaseConfig'



class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      authentication: false,
      tokenReceived: false
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseConfig);
    }
  }

  componentWillMount = () => {
    { this.getToken() }
  }

  getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        this.setState({ tokenReceived: true })
        console.log('Token from Aysnc Storage ', value);
      }
    } catch (error) {
      console.log('Token from Aysnc Storage No');
    }
  }

  componentDidUpdate = () => {
    console.log('Log my nigger out')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        {this.state.tokenReceived ? <MainNav /> : this.props.access ? <MainNav /> : <AuthNav />}

        {/* {this.state.tokenReceived ? <MainNav /> : <AuthNav />}
        {this.props.access ? <MainNav /> : <AuthNav />} */}
        {console.log('token received boolean ', this.state.tokenReceived)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#656565',
    justifyContent: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    access: state.auth.access,
    spinner: state.auth.spinner
  };
};

export default connect(mapStateToProps)(App);




