/**
* This is the Main file
* This file contains the routes of all the pages
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';


// Our custom files and classes import
import Home from './src/page/Home';
import Search from './src/page/Search';
import Cart from './src/page/Cart';
import WishList from './src/page/WishList';
import Map from './src/page/Map';
import Newsletter from './src/page/Newsletter';
import Contact from './src/page/Contact';
import Category from './src/page/Category';
import Product from './src/page/Product';
import ImageGallery from './src/page/ImageGallery';
import Login from './src/page/Login';
import Signup from './src/page/Signup';
import Checkout from './src/page/Checkout';

export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return (
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} hideNavBar />
            <Scene key="search" component={Search} modal hideNavBar />
            <Scene key="cart" component={Cart} modal hideNavBar />
            <Scene key="wishlist" component={WishList} modal hideNavBar />
            <Scene key="map" component={Map} modal hideNavBar />
            <Scene key="contact" component={Contact} modal hideNavBar />
            <Scene key="newsletter" component={Newsletter} modal hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
            <Scene key="imageGallery" component={ImageGallery} modal hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} hideNavBar />
            <Scene key="checkout" component={Checkout} hideNavBar />
          </Scene>
        </Router>
      </Root>
    );
  }

}
