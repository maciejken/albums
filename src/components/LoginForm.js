import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    async onButtonPress() {
        this.setState({ loading: true, error: '' });
        const { email, password } = this.state;
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (signInError) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);        
            } catch (signUpError) {
                this.onLoginError();
            }
        }            
    }

    onLoginSuccess() {
        this.setState({
            error: '',
            email: '',
            password: '',
            loading: false
        }); 
    }

    onLoginError() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    }

    renderErrorText() {
        var { errorTextStyle } = styles;
        if (this.state.error.length > 0) {
            return <Text style={errorTextStyle}>{this.state.error}</Text>;
        }
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.email}
                        placeholder="username@gmail.com"
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.password}
                        placeholder="password"
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                    />                    
                </CardSection>

                {this.renderErrorText()}

                {this.renderButton()}
            </Card>
        );
    }
}

var styles = {
    errorTextStyle: {
        fontSize: 20,
        lineHeight: 40,
        alignSelf: 'center',       
        color: 'red'
    }
}

export { LoginForm };
