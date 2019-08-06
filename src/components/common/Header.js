import React from 'react';
import { View, Text } from 'react-native';

function Header (props) {
    var { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

var styles = {
    viewStyle: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 18,
    }
}

export { Header };