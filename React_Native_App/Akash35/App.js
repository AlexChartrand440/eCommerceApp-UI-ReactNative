

import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
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
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseConfig);
    }
  }

  render() {
    console.log('print access ', this.props.access, '  this is for spinner ', this.props.spinner)
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        {!this.props.access ? <AuthNav /> : <MainNav />}
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




