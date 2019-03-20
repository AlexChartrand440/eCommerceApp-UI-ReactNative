import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import logoImg from '../../images/logo.png'

const LogoComp = () => {
    return(
        <View style={styles.container}>  
             <Image source={logoImg} style={styles.logoContainer} />
                <Text style={styles.logoText}> Mobile Bank Game</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:0,
    },
    logoContainer: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: '#000000',
        fontSize: 25,
        marginTop: 1,
        marginBottom: 20,
    },
})

export default LogoComp;
