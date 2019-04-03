import React, { Component } from 'react';
import { Image, View, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
// import { userToken } from '../../actions/UserAction';
import avatar from '../../images/avatar.png';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    setToken = () => {
        const { token } = this.props
        AsyncStorage.setItem('userToken', token)
    }

    render() {
        console.log('TOKEN GLOBALLY', this.props.token)
        { this.setToken() }
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

const mapStateToProps = (state) => ({
    token: state.auth.userToken,
})

const mapDispatchToProps = (dispatch) => {
    return {
        // userToken: (token) => dispatch(userToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
