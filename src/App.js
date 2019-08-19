import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import { LoginForm } from './components';

class App extends Component {
    state = { loggedIn: null };

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA3A3GAmACv143vX3sSXxNWQvCGXbr6S9U",
            authDomain: "auth-4778a.firebaseapp.com",
            databaseURL: "https://auth-4778a.firebaseio.com",
            projectId: "auth-4778a",
            storageBucket: "",
            messagingSenderId: "628567495169",
            appId: "1:628567495169:web:2dd3c31fcbb12a14"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />
                {this.renderContent()}
            </View>
        );
    }
};

export default App;
