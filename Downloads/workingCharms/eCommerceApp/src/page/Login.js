/**
* This is the Login Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, View, Left, Right, Button, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hasError: false,
      errorText: ''
    };
  }


  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' size={20} />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search' size={20} />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' size={20} />
        </Button>
      </Right>
    );
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Navbar left={left} right={right} title="LOGIN" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50 }}>
          <View style={{ marginBottom: 35, width: '100%' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%', color: Colors.navbarBackgroundColor }}>Welcome back, </Text>
            <Text style={{ fontSize: 18, textAlign: 'left', width: '100%', color: '#687373' }}>Login to continue </Text>
          </View>
          <Item>
            <Icon active name='ios-person' style={{ color: "#687373" }} size={20} />
            <Input placeholder='Username' onChangeText={(text) => this.setState({ username: text })} placeholderTextColor="#687373" />
          </Item>
          <Item>
            <Icon active name='ios-lock' style={{ color: "#687373" }} size={20} />
            <Input placeholder='Password' onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} placeholderTextColor="#687373" />
          </Item>
          {this.state.hasError ? <Text style={{ color: "#c0392b", textAlign: 'center', marginTop: 10 }}>{this.state.errorText}</Text> : null}
          <View style={{ alignItems: 'center' }}>
            <Button onPress={() => this.login()} style={{ backgroundColor: Colors.navbarBackgroundColor, marginTop: 20, width: 95, justifyContent: 'center' }}>
              <Text style={{ color: '#fdfdfd' }}>Login</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }

  login() {
    /*
      Remove this code and replace it with your service
      Username: this.state.username
      Password: this.state.password
    */
    this.setState({ hasError: true, errorText: 'Invalid username or password !' });
  }


}
