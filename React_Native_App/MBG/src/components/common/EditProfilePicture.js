import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ProfilePicture = ({ source, onPress }) => {
    return (
        <View>
            <Image source={source} style={styles.avatar} />
            <TouchableOpacity style={styles.btnEye} onPress={onPress}>
                <Icon
                    name='ios-camera'
                    size={26}
                    color={'#000000'}
                />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'center',
        position: 'absolute',
        marginTop: -65
    },
    btnEye: {
        position: 'absolute',
        top: 45,
        right: 135,
        alignSelf: 'center',
        justifyContent: 'center'
    },
})

export default ProfilePicture;
