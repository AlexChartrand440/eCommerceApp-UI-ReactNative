import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from '../../components/common';
import { logoutUser } from '../../actions/AuthAction';


class SettingScreen extends Component {

    render() {
        return (
            <CardSection>
                <Button title='Logout' onPress={this.props.logoutUser} />
            </CardSection>
        )
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
