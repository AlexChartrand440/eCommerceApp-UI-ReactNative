import { Alert, AsyncStorage } from 'react-native';
import { actionTypes } from './GolbalActions';
import firebase from 'firebase';


// ==================       USE OF REDUX THUNK TO MODIFY THE ACTIONS  ============================

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.LOGIN_REQUEST })
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: user });
			})
			.catch(function (err) {
				alert(err)
				dispatch({ type: actionTypes.LOGIN_ERROR })
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		firebase.auth().signOut;
		AsyncStorage.removeItem('userToken')
		dispatch({ type: actionTypes.LOGOUT })
	}
}

export const registerRequest = (userData) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.LOGIN_REQUEST })
		firebase
			.auth()
			.createUserWithEmailAndPassword(userData.email, userData.password)
			.then((user) => {
				dispatch({ type: actionTypes.REGISTER_SUCCESS, payload: user });
			})
			.catch(function (err) {
				alert(err)
				dispatch({ type: actionTypes.LOGIN_ERROR })
			});
	};
};

export const resetPassword = (email) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.LOGIN_REQUEST })
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				dispatch({ type: actionTypes.RESET_PASSWORD_SUCCESS, payload: email });
				Alert.alert('Password reset link has been sent to the email: ' + email);
			})
			.catch(function (err) {
				alert(err);
				dispatch({ type: actionTypes.LOGIN_ERROR })
			});
	};
};
