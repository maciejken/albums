import React from 'react';
import { View, Text } from 'react-native';

function Header (props) {
    return (
        <View>
            <Text>{props.headerText}</Text>
        </View>
    );
}

export default Header;