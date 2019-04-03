import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 25,
        width: WIDTH - 230,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        backgroundColor: '#3cff00',
        marginTop: 10,
    },

    buttonText: {
        alignSelf: 'center',
        color: '#336633',
        fontSize: 19,
        fontWeight: '600',
    },

});

export default Button;