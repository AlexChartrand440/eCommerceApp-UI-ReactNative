/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Left, Right, Button, Grid, Col } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import Product from '../component/Product';


export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    var products = [
      {
        id: 1, title: 'Suits', categoryId: 5, categoryTitle: 'MEN', price: '250',
        image: 'https://cdn.pixabay.com/photo/2017/01/14/10/03/fashion-1979136_1280.jpg',
        description: "Suit up like the sleek professional you are in our Suit. Crafted from breathable Wool, this Classic piece is cut to our moderately tapered Drop 7 block.The half-canvas jacket is fully lined with a Prince of Wales pattern,  front pocket flaps, a welt pocket at the chest, notch lapel, 2-button closure and non-working buttons at cuff. The trousers also feature a check pattern and belt loops.",
        images: [
          'http://www.jbsuits.com/product_images/j/543/gray-three-piece-suit__64745_zoom.jpg',
          'http://www.asiasuits.com/wp-content/uploads/2018/03/OSCN7-Double-Breasted-Suit-Men-Slim-Fit-Leisure-Office-Formal-Black-Suit-Pants.jpg',
          'https://www.politix.com.au/dw/image/v2/ABBA_PRD/on/demandware.static/-/Sites-politix-master-catalog/default/dw48f31653/images/hires/Summer19/VZ31T_New_Blue_1.jpg?sw=600&sh=600&sm=fit'
        ],
        colors: ['Grey', 'Black', 'Blue'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        category: 'MAN'
      },
      {
        id: 2, title: 'Wrist Watches', categoryId: 2, categoryTitle: 'WOMEN', price: '90',
        image: 'https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_1280.jpg',
        description: "Bering Max Rene 32mm Silicon Strap Polished Case, Strap, 50 meter Water Resistant with Saphire Crystal Glass",
        images: [
          'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/10/105/1511/403/1/612387640/612387640_1_720x928.jpg',
          'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/10/105/1511/403/1/612388180/612388180_1_720x928.jpg',
          'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/10/105/1511/402/1/550017100/550017100_1_720x928.jpg',
        ],
        colors: ['Rose', 'Silver', 'Black'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        category: 'WOMEN',
      },
      {
        id: 10, title: 'Converse Shoes', categoryId: 1, categoryTitle: 'WOMEN', price: '82',
        image: 'https://cdn.pixabay.com/photo/2016/11/18/22/35/all-star-1837189_1280.jpg',
        description: "These Chuck Taylor All Star high top sneakers are a spin off a classic. It doesn’t get much tougher than the premium leather upper with glam accents like patent leather and shiny lace. The chic feel continues inside with an OrthoLite insole for cushioning, so you can keep your style on 100 all day long.",
        images: [
          'https://cdn.converse.com.au/media/catalog/product/cache/1/image/520x/9df78eab33525d08d6e5fb8d27136e95/1/6/162398_black_0.png',
          'https://cdn.converse.com.au/media/catalog/product/cache/1/image/520x/9df78eab33525d08d6e5fb8d27136e95/5/5/559937_egret_0.png',
          'https://cdn.converse.com.au/media/catalog/product/cache/1/image/520x/9df78eab33525d08d6e5fb8d27136e95/5/6/561722_punch-coral_0_1.png',
        ],
        colors: ['Black', 'White', 'Pink'],
        sizes: ['US: 5', 'US: 6', 'US: 7', 'US: 8', 'US: 9',],
        category: 'WOMEN',
      },
      {
        id: 15, title: 'Ladies Purse', categoryId: 5, categoryTitle: 'WOMEN', price: '35',
        image: 'https://cdn.pixabay.com/photo/2014/07/11/20/49/purse-390345_1280.jpg',
        description: "A slim and practical choice, this genuine leather wallet features a bi-fold design with a luxe, pebbled finish. The wallet fastens with a single button strap, opening to multiple compartments for your cash, cards and receipts. \n- 100% Leather\n- Bi-fold design\n- Pebbled finish- Foiled logo",
        images: [
          'https://www.davidjones.com/productimages/medium/1/1883969_18432810_1300050.jpg',
          'https://www.davidjones.com/productimages/medium/1/1873313_18321303_1301267.jpg',
          'https://www.davidjones.com/productimages/medium/1/1873314_18321304_1301269.jpg',
        ],
        colors: ['Light Brown', 'Red', 'Black'],
        sizes: ['Normal', 'Phone Cover Included'],
        category: 'WOMEN',
      },
      {
        id: 11, title: 'Fur Vest Kids', categoryId: 5, categoryTitle: 'KIDS', price: '80',
        image: 'https://www.target.com.au/medias/static_content/product/images/full/21/85/A1312185.jpg?impolicy=desktop_hero',
        description: "This fur vest isn't for the faint hearted as it's oozing with standout style. Team with jeans, boots and sunglasses to complete their new cool weather look!",
        images: [
          'https://www.target.com.au/medias/static_content/product/images/full/21/85/A1312185.jpg?impolicy=desktop_hero',
          'https://www.target.com.au/medias/static_content/product/images/full/22/48/A1312248.jpg?impolicy=desktop_hero',
          'https://www.target.com.au/medias/static_content/product/images/full/22/49/A1312249.jpg?impolicy=desktop_hero',
        ],
        colors: ['Brown'],
        sizes: ['S', 'M'],
        category: 'KIDS',
      },
      {
        id: 22, title: 'Womens Sweaters', categoryId: 2, categoryTitle: 'WOMEN', price: '66',
        image: 'https://img.chiccdn.com/thumb/large/oaupload/yoins/images/AB/CE/333bf55f-90e6-478d-9a84-3115639f0beb.jpeg',
        description: "Summer nights often call for a little sweater, and this is most definitely it. \n-Front button closure  \n-Collarless  \n-75% pima cotton, 25% viscose  \n-Machine wash, dry flat",
        images: [
          'https://n.nordstrommedia.com/id/sr2/80ef0780-9f5d-4572-8098-2ac0e56319b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65',
          'https://n.nordstrommedia.com/id/sr2/f620ecc2-8693-45ef-a432-6a27b5f8b17d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65',
          'https://n.nordstrommedia.com/id/sr2/069e544d-5d43-4f2a-85bb-e84ad6042056.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65',
        ],
        colors: ['Black', 'Green', 'Orange'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        category: 'WOMEN'
      },
      {
        id: 100, title: 'Belt', categoryId: 1, categoryTitle: 'MEN', price: '45',
        image: 'https://www.ties.com/blog/wp-content/uploads/2016/11/mens_dress_belts_01.jpg',
        description: "Handcrafted in Australia from genuine leather, and lined for additional strength, the Belt is designed to last. An effortless way to put a smart finish on any look, the smooth black design is completed with a silver pin buckle.",
        images: [
          'https://img1.theiconic.com.au/-k8B1vS2POOnpUQ98tqW20rV2o0=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fbuckle-7378-365094-3.jpg',
          'https://img1.theiconic.com.au/scBcb3RkXteqXKRxDjCEdzknt7E=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fcerruti-1881-2798-289646-1.jpg',
          'https://img1.theiconic.com.au/sP0DITVZAN1HjJp9NbH46mklugs=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fbuckle-7378-265094-3.jpg',
        ],
        colors: ['Black', 'Blue', 'Brown'],
        sizes: ['S', 'M', 'L'],
        category: 'MEN'
      },
      {
        id: 12, title: 'Womens Sandal', categoryId: 5, categoryTitle: 'WOMEN', price: '30',
        image: 'http://www.famousfootwear.com.au/media/products/LPGETAWAY.BLK_1.jpg',
        description: "Flat sandal featuring two buckled straps and a cork effect footbed. Perfect for café catch ups with the girls, team Getaway with a fun floral dress and denim jacket for your next coffee date.",
        images: [
          'http://www.famousfootwear.com.au/media/products/LPGETAWAY.BLK_2.jpg',
          'http://www.famousfootwear.com.au/media/products/LPGETAWAY.BLK_5.jpg',
          'http://www.famousfootwear.com.au/media/products/LPGETAWAY.WHT_2.jpg',
          'http://www.famousfootwear.com.au/media/products/LPGETAWAY.WHT_5.jpg'
        ],
        colors: ['Black', 'White'],
        sizes: ['US: 5', 'US: 6', 'US: 7', 'US: 8', 'US: 9',],
        category: 'WOMEN'
      },
      {
        id: 29, title: 'Tommy T-Shirt', categoryId: 2, categoryTitle: 'Men', price: '55',
        image: 'https://img1.theiconic.com.au/KYj4d5HWcd1tSWiZ-akfHGh6Kvs=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftommy-hilfiger-8392-789326-1.jpg',
        description: "One of the world’s leading designer lifestyle brands, Tommy Hilfiger is the essence of classic American style. Hilfiger’s signature collection was introduced in the mid-‘80s, showcasing time-honoured staples including button-up shirts, chinos and knits expertly modernised with updated fits and details. Recognised internationally for its iconic red, white and blue flag logo, the brand’s relaxed and youthful attitude has remained a distinctive hallmark throughout their collections.",
        images: [
          'https://img1.theiconic.com.au/WFI7HC4PC2cqXZopo1ILLFdOiQs=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftommy-hilfiger-8399-689326-1.jpg',
          'https://img1.theiconic.com.au/p7pPE-88wa7BTs_ZVdcM06kbznk=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftommy-hilfiger-8392-789326-1.jpg',
          'https://img1.theiconic.com.au/RGahn9tfIVTiNZbgLDXri-Q05A8=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftommy-hilfiger-8412-889326-1.jpg'
        ],
        colors: ['Blue', 'White', 'Black'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        category: 'MEN',
      },
      {
        id: 16, title: 'Kids Caps', categoryId: 1, categoryTitle: 'MEN', price: '25',
        image: 'https://ae01.alicdn.com/kf/HTB1GOj8MpXXXXXFXpXXq6xXFXXX4/Anime-God-stole-Dad-kids-Cap-European-American-Cap-Children-cap-yellow-Snapback-Hip-hop-Caps.jpg_640x640.jpg',
        description: "Different cartoon featured caps for adulta and kids with different designs and patterns   \n-Fortnite  \n-Spiderman    \n-Batman",
        images: [
          'https://fortnitenut.com/wp-content/uploads/2018/08/622487079-1.jpg',
          'https://image.dhgate.com/0x0/f2/albu/g5/M01/B0/39/rBVaJFlp06mAb6pfAADMAVr1k0Q189.jpg',
          'https://hip-hop-shop.supremestyle.eu/sub/hip-hop-shop.supremestyle.eu/shop/product/resized/kids-new-era-9fifty-child-batman-character-outline-enfant-noire-53426.thumb_600x600.jpg?t=1518608402'
        ],
        colors: ['Fortnite', 'Spiderman', 'Batman'],
        sizes: ['S', 'M', 'L'],
        category: 'MEN'
      },
    ];
    this.setState({ items: products });
  }

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
        <Container style={{ backgroundColor: '#fdfdfd' }}>
          <Navbar left={left} right={right} title={this.props.title} />
          <Content padder>
            {this.renderProducts()}
          </Content>
        </Container>
      </SideMenuDrawer>
    );
  }

  renderProducts() {
    let items = [];
    let stateItems = this.state.items
    for (var i = 0; i < stateItems.length; i += 2) {
      if (stateItems[i + 1]) {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Product key={stateItems[i + 1].id} product={stateItems[i + 1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i + 1} />
          </Grid>
        );
      }
    }
    return items;
  }
}
