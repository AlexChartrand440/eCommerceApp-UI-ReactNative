import { actionTypes } from '../actions/GolbalActions';

const initialState = {
	email: '',
	password: '',
	emailReset: '',
	access: false,
	spinner: false,
	userToken: '',
	user: null
};

const AuthReducer = (state = initialState, action) => {
	console.log('all the actions');
	console.log(action);
	switch (action.type) {

		case actionTypes.LOGIN_REQUEST:
			return { ...state, spinner: true, access: false };

		case actionTypes.LOGIN_SUCCESS:
			console.log('Reducer login', action.payload.user)
			return { ...state, userToken: action.payload.user.uid, access: true, spinner: false, email: action.payload.user.email, user: action.payload };

		case actionTypes.LOGOUT:
			return { ...state, access: false }

		case actionTypes.REGISTER_SUCCESS:
			console.log('Reducer Register', action.payload.user)
			return { ...state, email: action.payload.user.email, spinner: false, access: false, user: action.payload };

		case actionTypes.RESET_PASSWORD_SUCCESS:
			console.log('Reducer Reset', action.payload)
			return { ...state, spinner: false, access: false, emailReset: action.payload }

		case actionTypes.LOGIN_ERROR:
			return { ...state, spinner: false, access: false }

		default:
			// need this for default case
			return state;
	}
};

export default AuthReducer;
