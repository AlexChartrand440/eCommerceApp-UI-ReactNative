import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    EditProfileScreen, SearchScreen, SettingScreen, HomeScreen,
    NotificationScreen, WalletScreen, ProfileScreen
} from '../screens/user'

const ProfileStack = createStackNavigator({
    profile: {
        screen: ProfileScreen,
        navigationOptions: {
            header: null
        }
    },
    editProfile: {
        screen: EditProfileScreen,
        navigationOptions: () => ({
            title: 'Edit Profile',
            // headerLeft: { onPress =() => { this.props.navigation.goback() } },
            // headerLeft: null,
            headerStyle: { backgroundColor: '#656565', elevation: 0 },
            titleStyle: {
                textAlign: 'center'
            },

        })
    },
}, {
        initialRouteName: 'profile',
        headerMode: 'screen',
        cardStyle: { backgroundColor: '#656565' },
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-contact" color={tintColor} size={28} />
            )
        }
    })


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
        screen: ProfileStack
        // screen: ProfileScreen,
        // navigationOptions: {
        //     tabBarIcon: ({ tintColor }) => (
        //         <Icon name="ios-contact" color={tintColor} size={28} />
        //     )
        // }
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