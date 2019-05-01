/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu' size={20} />
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
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
        <Container>
          <Navbar left={left} right={right} title="MY STORE" />
          <Content>
            {this.renderCategories()}
          </Content>
        </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for (var i = 0; i < categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'MEN',
    image: 'https://cdn.pixabay.com/photo/2015/09/02/12/28/fashion-918446_1280.jpg'
  },
  {
    id: 2,
    title: 'WOMEN',
    image: 'https://t3.ftcdn.net/jpg/01/38/81/76/240_F_138817681_4FCgB89eGIBi7W7i0g0mPJHsg9ZuZyzU.jpg'
  },
  {
    id: 3,
    title: 'KIDS',
    image: 'https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg'
  },
  {
    id: 4,
    title: 'ACCESSORIES',
    image: 'https://cdn.pixabay.com/photo/2017/08/28/20/27/market-2691177_1280.jpg'
  }
];
