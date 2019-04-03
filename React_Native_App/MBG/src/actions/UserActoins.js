import { Alert, AsyncStorage } from 'react-native';
import { actionTypes } from './GolbalActions';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

export const editProfile = ({ fullname, email, DOB, address }) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/userInfo`)
            .push({ fullname, email, DOB, address })
        dispatch(NavigationActions.navigate({ routeName: 'profile' }));        // dispatch({ type: actionTypes.EDIT_PROFILE, payload: editData })
    }
} 