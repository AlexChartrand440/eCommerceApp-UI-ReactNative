import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfilePicture = ({ source }) => {
    return (
        <View>
            <Image source={source} style={styles.avatar} />
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
})

export default ProfilePicture;
