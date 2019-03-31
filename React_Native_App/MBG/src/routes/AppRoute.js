import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchScreen from '../screens/user/SearchScreen';
import SettingScreen from '../screens/user/SettingScreen';
import HomeScreen from '../screens/user/HomeScreen';
import NotificationScreen from '../screens/user/NotificationScreen';
import WalletScreen from '../screens/user/WalletScreen';
import ProfileScreen from '../screens/user/ProfileScreen';

const bottomTab = createMaterialTopTabNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={28} />
            )
        }
    },
    profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-contact" color={tintColor} size={28} />
            )
        }
    },
    wallet: {
        screen: WalletScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-wallet" color={tintColor} size={28} />
            )
        }
    },
    search: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-search" color={tintColor} size={28} />
            )
        }
    },
    setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" color={tintColor} size={28} />
            )
        }
    }
},
    {
        initialRouteName: 'home',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'black',
            style: {
                elevation: 0,
                marginBottom: 2,
                backgroundColor: 'transparent',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderTopColor: '#ffffff',
                borderBottomColor: '#ffffff'
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true,
            showLabel: false
        }
    }

)

const tabNavi = createAppContainer(bottomTab);
export default tabNavi;