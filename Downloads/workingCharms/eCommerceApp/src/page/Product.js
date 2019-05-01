/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { View, Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import { default as ProductComponent } from '../component/Product';

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      activeSlide: 0,
      quantity: 1,
      selectedColor: '',
      selectedSize: '',
      similarThings: {}
    };
  }

  componentWillMount() {
    //get the product with id of this.props.product.id from your server
    this.setState({ product: this.props.product });
    this.setState({ similarThings: similars.similarItems })
  }

  componentDidMount() {
    let defColor = this.state.product.colors[0];
    let defSize = this.state.product.sizes[0];
    this.setState({
      selectedColor: defColor,
      selectedSize: defSize
    });
  }

  render() {
    console.log('from search prop', this.props.product)
    console.log('from SimilarItemsArray', this.state.similarThings)
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Navbar left={left} right={right} title={this.props.product.title} />
        <Content>
          <Carousel
            data={this.state.product.images}
            renderItem={this._renderItem}
            ref={(carousel) => { this._carousel = carousel; }}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
            enableSnap={true}
          />
          <Pagination
            dotsLength={this.state.product.images.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{ backgroundColor: 'transparent', paddingTop: 0, paddingBottom: 0, marginTop: -15 }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <View style={{ backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center' }}>
            <Grid>
              <Col size={3}>
                <Text style={{ fontSize: 18 }}>{this.state.product.title}</Text>
              </Col>
              <Col>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${this.state.product.price}</Text>
              </Col>
            </Grid>
            <Grid style={{ marginTop: 15 }}>
              <Col>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>Color:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Picker
                  mode="dropdown"
                  placeholder="Select a color"
                  note={true}
                  selectedValue={this.state.selectedColor}
                  onValueChange={(color) => this.setState({ selectedColor: color })}
                >
                  {this.renderColors()}
                </Picker>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>Size:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Picker
                  mode="dropdown"
                  placeholder="Select a size"
                  note={true}
                  selectedValue={this.state.selectedSize}
                  onValueChange={(size) => this.setState({ selectedSize: size })}
                >
                  {this.renderSize()}
                </Picker>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>Quantity:</Text>
                </View>
              </Col>
              <Col size={3}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Button block icon transparent onPress={() => this.setState({ quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1 })} >
                    <Icon name='ios-remove' style={{ color: Colors.navbarBackgroundColor }} />
                  </Button>
                  <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', paddingLeft: 30, paddingRight: 30 }}>
                    <Text style={{ fontSize: 18 }}>{this.state.quantity}</Text>
                  </View>
                  <Button block icon transparent onPress={() => this.setState({ quantity: this.state.quantity + 1 })}>
                    <Icon style={{ color: Colors.navbarBackgroundColor }} name='ios-add' />
                  </Button>
                </View>
              </Col>
            </Grid>
            <Grid style={{ marginTop: 15 }}>
              <Col size={3}>
                <Button block onPress={this.addToCart.bind(this)} style={{ backgroundColor: Colors.navbarBackgroundColor }}>
                  <Text style={{ color: "#fdfdfd", marginLeft: 5 }}>Add to cart</Text>
                </Button>
              </Col>
              <Col>
                <Button block onPress={this.addToWishlist.bind(this)} icon transparent style={{ backgroundColor: '#fdfdfd' }}>
                  <Icon style={{ color: Colors.navbarBackgroundColor }} name='ios-heart' />
                </Button>
              </Col>
            </Grid>
            <View style={{ marginTop: 15, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)' }}>
              <Text style={{ marginBottom: 5 }}>Description</Text>
              <View style={{ width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10 }} />
              <NBText note>
                {this.state.product.description}
              </NBText>
            </View>
          </View>
          <View style={{ marginTop: 15, paddingLeft: 12, paddingRight: 12 }}>
            <Text style={{ marginBottom: 5 }}>Similar items</Text>
            <View style={{ width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10 }} />
            {this.renderSimilairs()}
          </View>
        </Content>
      </Container>
    );
  }
  _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => this.openGallery(index)}
      >
        <Image
          source={{ uri: item }}
          style={{ width: Dimensions.get('window').width, height: 350 }}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>
    );
  }


  renderColors() {
    let colors = [];
    this.state.product.colors.map((color, i) => {
      colors.push(
        <Item key={i} label={color} value={color} />
      );
    });
    return colors;
  }

  renderSize() {
    let size = [];
    this.state.product.sizes.map((s, i) => {
      size.push(
        <Item key={i} label={s} value={s} />
      );
    });
    return size;
  }

  renderSimilairs() {
    let items = [];
    let stateItems = this.state.similarThings;
    for (var i = 0; i < stateItems.length; i += 2) {
      if (stateItems[i + 1]) {
        items.push(
          <Grid key={i}>
            <ProductComponent key={stateItems[i].id} product={stateItems[i]} />
            <ProductComponent key={stateItems[i + 1].id} product={stateItems[i + 1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <ProductComponent key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i + 1} />
          </Grid>
        );
      }
    }
    return items;
  }

  openGallery = (pos) => {
    Actions.imageGallery({ images: this.state.product.images, position: pos });
  }

  addToCart() {
    var product = this.state.product;
    var success = true;
    product['color'] = this.state.selectedColor;
    product['size'] = this.state.selectedSize;
    product['quantity'] = this.state.quantity;
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) AsyncStorage.setItem("CART", JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        if (this.search(items, product)) {
          success = false
        }
        else {
          items.push(product);
          AsyncStorage.setItem("CART", JSON.stringify(items));
        }
      }
      if (success) {
        Toast.show({
          text: 'Product added to your cart !',
          position: 'bottom',
          type: 'success',
          buttonText: 'Dismiss',
          duration: 3000
        });
      }
      else {
        Toast.show({
          text: 'This product already exist in your cart !',
          position: 'bottom',
          type: 'danger',
          buttonText: 'Dismiss',
          duration: 3000
        });
      }
    });
  }

  addToWishlist() {
    var product = this.state.product;
    var success = true;
    AsyncStorage.getItem("WISHLIST", (err, res) => {
      if (!res) AsyncStorage.setItem("WISHLIST", JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        if (this.search(items, product)) {
          success = false
        }
        else {
          items.push(product);
          AsyncStorage.setItem("WISHLIST", JSON.stringify(items));
        }
      }
      if (success) {
        Toast.show({
          text: 'Product added to your wishlist !',
          position: 'bottom',
          type: 'success',
          buttonText: 'Dismiss',
          duration: 3000
        });
      }
      else {
        Toast.show({
          text: 'This product already exist in your wishlist !',
          position: 'bottom',
          type: 'danger',
          buttonText: 'Dismiss',
          duration: 3000
        });
      }
    });
  }

  search(array, object) {
    for (var i = 0; i < array.length; i++)
      if (JSON.stringify(array[i]) === JSON.stringify(object))
        return true;
    return false;
  }
}


const similars = {
  similarItems: [
    {
      id: 80, title: 'iPhone Leather Case', categoryId: 5, categoryTitle: 'ACCESSORIES', price: '45',
      image: 'https://cdn.vox-cdn.com/thumbor/UbagzVOEwy-fnq3WA5Y0wzxtsoI=/0x0:2040x1360/1220x813/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57892395/akrales_171129_2162_0112.0.jpg',
      description: 'Premium leather design – this product is a real designer piece – The finest leather styles makes our case to a real eyecatcher and makes it stand out in a crowd. Combine it also with our Apple Watch Straps in the same design. \n \nHigh-quality genuine leather , elegant design and a perfect all-round protection for your Apple iPhones ',
      images: [
        'https://i.etsystatic.com/17897741/r/il/feb8be/1746203898/il_1588xN.1746203898_39qp.jpg',
        'https://i.etsystatic.com/17897741/r/il/de9387/1760889746/il_794xN.1760889746_fo0m.jpg',
        'https://i.etsystatic.com/17897741/r/il/509608/1857886402/il_794xN.1857886402_obyh.jpg',
        'https://i.etsystatic.com/17897741/r/il/690bc9/1857886474/il_794xN.1857886474_kgc9.jpg'
      ],
      colors: ['Leather Brown'],
      sizes: ['iPhone 7', 'iPhone 8', 'iPhone 9', 'iPhone X', 'iPhone XS'],
      category: 'ACCESSORIES',

    },
    {
      id: 81, title: 'Hoodie', categoryId: 2, categoryTitle: 'MEN', price: '99',
      image: 'https://img1.theiconic.com.au/cmN1dj4xRLZT_Y9nvAmK3C8zMDE=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fchampion-life-5331-649328-1.jpg',
      description: "Bering Max Rene 32mm Silicon Strap Polished Case, Strap, 50 meter Water Resistant with Saphire Crystal Glass \n-Kangaroo pouch \n-Long sleeves \n-Logo appliques to cuffs and chest ",
      images: [
        'https://img1.theiconic.com.au/AD4_7zbp5rDROBdtrkFuXvf_z9A=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fchampion-life-7378-248804-1.jpg',
        'https://img1.theiconic.com.au/iBHkL2KmlNMJCCvPRf2OoDzWU3k=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fchampion-life-1936-749328-1.jpg',
        'https://img1.theiconic.com.au/55zxBCVw6s05HXftEjN7SIaGIQE=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fchampion-life-1956-149328-1.jpg'
      ],
      colors: ['Black, White, Orange'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'MEN',
    },
    {
      id: 82, title: 'Women Jeans', categoryId: 1, categoryTitle: 'WOMEN', price: '82',
      image: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw8760b72e/product_images/0860103680289NEW_00_349.jpg?sw=458&sh=710&sm=fit',
      description: 'The Mid Licks Jean are skinny jeans made of stretch denim fabrication in a jet black wash. These jeans feature a mid-rise that sits just below the belly button, five pockets, woven tag at the back as well as a leather patch.',
      images: [
        'https://www.generalpants.com/products/images/10000805/1000080534_001_Zoom_1-Front.jpg',
        'https://www.generalpants.com/products/images/10000805/1000080548_040_Zoom_1-Front.jpg',
        'https://www.generalpants.com/products/images/10000805/1000080559_040_Zoom_7-Detail.jpg'
      ],
      colors: ['Black', 'Light Blue', 'Dark Blue'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'WOMEN',
    },
  ]
};

