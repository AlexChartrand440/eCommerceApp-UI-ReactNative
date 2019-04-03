import React, { Component } from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection, Spinner, Button } from '../../components/common'
import { editProfile } from '../../actions/UserActoins';

const { width: WIDTH } = Dimensions.get('window');
class EditProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            email: '',
            DOB: '',
            address: ''
        }
    }


    save = async () => {
        // try {
        //     const token = await AsyncStorage.getItem('userToken');
        //     if (token !== null) {
        //         console.log('token from async storage ', token);
        //     }
        // } catch (error) {
        //     // Error retrieving data
        // }
        const { fullname, email, DOB, address } = this.state
        this.props.editProfile({ fullname, email, DOB, address })

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        style={styles.inputBox}
                        autoCorrect={false}
                        onChangeText={(token) => this.setState({ fullname: token })}
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                        autoCapitalize='words'
                        placeholder="Full Name"
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        style={styles.inputBox}
                        autoCorrect={false}
                        onChangeText={(token) => this.setState({ email: token })}
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                        autoCapitalize='words'
                        placeholder="email"
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        style={styles.inputBox}
                        autoCorrect={false}
                        onChangeText={(token) => this.setState({ DOB: token })}
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                        autoCapitalize='words'
                        placeholder="DOB"
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        style={styles.inputBox}
                        autoCorrect={false}
                        onChangeText={(token) => this.setState({ address: token })}
                        underlineColorAndroid="transparent"
                        autoCorrect={false}
                        autoCapitalize='words'
                        placeholder="Address"
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                    />
                </CardSection>
                <CardSection>
                    <Button title='Save' onPress={this.save} />
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: WIDTH - 65,
        height: 45,
        fontSize: 16,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        marginTop: 10
    },

})

const mapStateToProps = (state) => ({
    token: state.auth.userToken,
})

const mapDispatchToProps = (dispatch) => {
    return {
        editProfile: ({ fullname, email, DOB, address }) => dispatch(editProfile({ fullname, email, DOB, address }))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);

