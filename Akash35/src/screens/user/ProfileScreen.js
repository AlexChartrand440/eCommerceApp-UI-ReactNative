import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../components/common/Button';
import CardSection from '../../components/common/CartSection';
import avatar from '../../images/avatar.png';

export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={avatar} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>

                        <Text style={styles.name}>Akash Rouniyar</Text>
                        <Text style={styles.info}>Email: user@user.com</Text>
                        <Text style={styles.info}>DOB: dd/mm/yyyy</Text>
                        <Text style={styles.info}>Address: Apple Street, Sydeny</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Edit'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },  
    header: {
        backgroundColor: "#00BFFF",
        height: 170,
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
        flexDirection:'row',
        position: 'absolute',
        bottom: 10
    },
});