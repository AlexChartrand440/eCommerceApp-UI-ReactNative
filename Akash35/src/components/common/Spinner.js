import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import CardSection from './CartSection';

const Spinner = ({ size }) => {
    return (
        <CardSection style={styles.spin} >
            <ActivityIndicator size={size} />
        </CardSection>
    )
};


const styles = StyleSheet.create({
    spin: {
        color:"#ffffff",
        justifyContent: 'center',
        marginHorizontal: 25,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        marginTop: 10
    },
})

export default Spinner;

