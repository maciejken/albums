import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

function Button ({ onPress, children }) {
    var { buttonStyle, textStyle } = styles;
    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={buttonStyle}>
                    <Text style={textStyle}>{children}</Text>
                </View>
            </TouchableNativeFeedback>            
        </View>
    );
}

var styles = {
    buttonStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#007aff'
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
