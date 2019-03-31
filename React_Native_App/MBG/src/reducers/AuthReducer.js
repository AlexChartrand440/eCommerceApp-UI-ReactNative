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
		case actionTypes.EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case actionTypes.PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case actionTypes.LOGIN_REQUEST:
			return { ...state, spinner: true, access: false };

		case actionTypes.LOGIN_SUCCESS:
			console.log('Reducer login', action.payload)
			return { ...state, access: true, spinner: false, email: action.payload.user.email, user: action.payload };

		case actionTypes.REGISTER_SUCCESS:
			console.log('Reducer Register', action.payload)
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
