import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function Spinner({ size }) {
    return (
        <View style={ styles.spinnerStyle }>
            <ActivityIndicator size={size || 'large'} color='#00f' />
        </View>
    );        
}

var styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
}

export { Spinner };
