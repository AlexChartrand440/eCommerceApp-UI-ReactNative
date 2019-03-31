import { actionTypes } from '../actions/GolbalActions';

const initialState = {
    userToken: '',
}

const UserReducer = (state = initialState, action) => {
    console.log('ALL THE ACTION FROM USER_REDUCER');
    console.log(action);
    switch (action.type) {
        case actionTypes.USER_TOKEN:
            console.log('token received in reducer', payload)
            return { ...state, userToken: action.payload }

        default:
            return state;
    }
}

export default UserReducer;