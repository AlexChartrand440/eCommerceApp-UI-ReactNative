import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth//SignupScreen';
import ResetPassScreen from '../screens/auth/ResetPassScreen';

const mainNav = createStackNavigator({
    login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: 'Login',
            headerStyle: { backgroundColor: '#656565', elevation: 0 },
            //  headerLeft: null
        })
    },
    signup: {
        screen: SignupScreen,
        navigationOptions: () => ({
            title: 'Signup',
            headerStyle: { backgroundColor: '#656565', elevation: 0 },
            headerLeft: null
        })
    },
    resetPass: {
        screen: ResetPassScreen,
        navigationOptions: () => ({
            title: 'Reset Password',
            headerStyle: { backgroundColor: '#656565', elevation: 0 },
            headerLeft: null
        }),
    }
}, {
        // headerMode: 'none',
        headerLayoutPreset: 'center',
        cardStyle: { backgroundColor: '#656565' },
    }
)

const AuthNav = createAppContainer(mainNav)
export default AuthNav;

