import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../components/common/Button';
import CardSection from '../../components/common/CartSection';
import wallpaper from '../../images/dollar2.png';


export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} androidScaleType="center" source={wallpaper} />
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>Akash Rouniyar</Text>
                        <Text style={styles.info}>Email: user@user.com</Text>
                        <Text style={styles.info}>DOB: dd/mm/yyyy</Text>
                        <Text style={styles.info}>Address: Apple Street, Sydeny</Text>

                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Top Up'} />
                    <Button title={'Transfer'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    image: {
        height: 170,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
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
    body: {
        marginTop: 40,
    },
    bodyContent: {
        // flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 16,
        color: "#ffffff",
        marginTop: 10
    },
    info: {
        fontSize: 16,
        color: "#ffffff",
        marginTop: 10
    },
    buttonContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10
    },
});