import React, { Component } from 'react';
import { StyleSheet, TextInput, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../common/Card';
import CardSection from '../common/CartSection';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/AuthAction';

const { width: WIDTH } = Dimensions.get('window');

class loginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			showPassword: true,
			eyePress: false
		};
	}
	showPass = () => {
		if (this.state.eyePress == false) {
			this.setState({ showPassword: false, eyePress: true });
		} else {
			this.setState({ showPassword: true, eyePress: false });
		}
	};

	showButton = () => {
		if (this.props.spinner) {
			return (<Spinner size='large' />)
		}
		return (
			<Button title={'Login'} onPress={this.loginPress} />
		)
	}

	loginPress = () => {
		const { email, password } = this.state;
		console.log(email, password)
		this.props.loginUser({ email, password });
	}


	render() {
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
					<Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
					<TextInput
						style={styles.inputBox}
						onChangeText={(value) => this.setState({ password: value })}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						placeholder="Password"
						secureTextEntry={this.state.showPassword}
						placeholderTextColor={'rgba(255,255,255,0.7)'}
					/>
					<TouchableOpacity style={styles.btnEye} onPress={this.showPass}>
						<Icon
							name={this.state.eyePress == false ? 'ios-eye' : 'ios-eye-off'}
							size={26}
							color={'rgba(255,255,255,0.7)'}
						/>
					</TouchableOpacity>
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
	btnEye: {
		position: 'absolute',
		top: 18,
		right: 40
	},
});

const mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		spinner: state.auth.spinner,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (email, password) => dispatch(loginUser(email, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
