import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CardSection from '../../components/common/CartSection';
import SignupComp from '../../components/auth/SignUpComp';
import Logo from '../../components/common/Logo';

class SignupScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <SignupComp />
                <CardSection>
                    <Text style={styles.signupText}>Go back to</Text>
                    <Text style={styles.ResetButton} onPress={() => this.props.navigation.navigate('login')}>
                        {' '}Login
                        </Text>
                </CardSection>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupText: {
        color: '#000000',
        fontSize: 16,
        marginTop: 25,
    },
    ResetButton: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 25,

    },
    signupTextCont: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '5%',
        flexDirection: 'row'
    }
});

export default SignupScreen;