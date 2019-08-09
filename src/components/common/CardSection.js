import React from 'react';
import { View } from 'react-native';

function CardSection (props) {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

var styles = {
    containerStyle: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export { CardSection };