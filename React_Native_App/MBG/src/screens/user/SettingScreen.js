import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from '../../components/common';
// import { logoutUser } from '../../actions/AuthAction';


class SettingScreen extends Component {

    logoutUser1 = () => {
        // this.props.logoutUser()
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Button title='Logout' onPress={this.logoutUser1} />
                </CardSection>
            </Card>
        )
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        // logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
