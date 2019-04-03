import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob'
import { connect } from 'react-redux';

import { Button, EditProFilePicture } from '../../components/common';


const options = {
    maxWidth: 150, maxHeight: 150,
    takePhotoButtonTitle: 'Open Camera',
    chooseFromLibraryButtonTitle: 'Select from Gallery',
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DP: null,
            fetchDP: null,
            uid: ''
        }
    }

    componentWillMount = () => {
        console.log('token received ', this.props.token)
        const avatar = firebase.storage().ref('this.props.token/ProfilePicture0');
        console.log('avatar ', avatar)
        this.setState({ fetchDP: avatar })
    }


    editPicture = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    DP: source.uri,
                });
                this.uploadImage(this.state.DP)
                    .then(() => {
                        Alert.alert('succrssful')
                    })
                    .catch((err) => {
                        Alert.alert(err);
                    })
            }
        });

    }

    uploadImage = async (uri) => {
        const Blob = RNFetchBlob.polyfill.Blob
        const fs = RNFetchBlob.fs
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        const uid = this.props.token
        var imageRef = firebase.storage().ref(uid).child('ProfilePicture0')
        let mime = 'image/jpg'
        fs.readFile(uri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
    }

    editProfile = () => {
        { this.props.navigation.navigate('editProfile') }
    }

    render() {
        console.log('re-render')
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <EditProFilePicture source={this.state.fetchDP} onPress={this.editPicture} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>

                        <Text style={styles.name}>Name: {}</Text>
                        <Text style={styles.info}>Email: {}</Text>
                        <Text style={styles.info}>DOB: {}</Text>
                        <Text style={styles.info}>Address: {}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Edit'} onPress={this.editProfile} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 170,
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
    body: {
        marginTop: 40,
    },
    bodyContent: {
        alignItems: 'center',
        padding: 30,
        marginTop: '10%',
    },
    name: {
        fontSize: 16,
        color: "#ffffff",
        marginTop: 10
    },
    info: {
        fontSize: 16,
        color: "#ffffff",
        marginTop: 10
    },
    buttonContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10
    },
});

const mapStateToProps = (state) => ({
    token: state.auth.userToken,
})

const mapDispatchToProps = (dispatch) => {
    return {
        // userToken: (token) => dispatch(userToken(token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
