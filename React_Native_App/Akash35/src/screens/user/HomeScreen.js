import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import avatar from '../../images/avatar.png';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.avatar} source={avatar} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 100
    },
})

export default HomeScreen;
