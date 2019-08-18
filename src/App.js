import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
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
                    <Card>
                        <CardSection>
                            <Button onPress={this.onButtonPress.bind(this)}>
                                Log out
                            </Button>
                        </CardSection>
                    </Card>
                );;
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    onButtonPress() {
        firebase.auth().signOut();
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
