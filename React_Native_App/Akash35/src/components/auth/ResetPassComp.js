import React, { Component } from 'react';
import { StyleSheet, TextInput, Dimensions, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../common/Card';
import CardSection from '../common/CartSection';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/AuthAction';

const { width: WIDTH } = Dimensions.get('window');

class ResetPassComp extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
		}
	}

	ResetPass = () => {
		const { email } = this.state;
		this.props.resetPassword(email);
	}

	showButton = () => {
		if (this.props.spinner) {
			return (<Spinner size='large' />)
		}
		return (
			<Button title={'Reset'} onPress={this.ResetPass} />)
	}

	render() {
		console.log('spinner from reset ', this.props.spinner)
		return (
			<Card>
				<CardSection>
					<Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
					<TextInput
						style={styles.inputBox}
						autoCorrect={false}
						onChangeText={(value) => this.setState({ email: value })}
						underlineColorAndroid="transparent"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Email Address"
						placeholderTextColor={'rgba(255,255,255,0.7)'}
					/>
				</CardSection>
				<CardSection>
					{this.showButton()}
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
		paddingLeft: 45,
		borderColor: '#ddd',
		borderBottomWidth: 1,
		color: 'rgba(255,255,255,0.7)',
		marginHorizontal: 25,
		marginTop: 10
	},
	inputIcon: {
		position: 'absolute',
		top: 18,
		left: 40
	},
});

const mapStateToProps = (state) => {
	console.log('from reset comp ', state)
	return {
		emailReset: state.auth.emailReset,
		loading: state.auth.loading,
		spinner: state.auth.spinner,
	};
};


const mapDispatchToProps = (dispatch) => {
	return {
		resetPassword: (email) => dispatch(resetPassword(email))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassComp);