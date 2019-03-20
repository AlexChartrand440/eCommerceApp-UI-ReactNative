import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Logo from '../../components/common/Logo';
import CardSection from '../../components/common/CartSection';
import ResetPassComo from '../../components/auth/ResetPassComp';

class ResetPassScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Logo />
                <ResetPassComo />
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
    },
});

export default ResetPassScreen;