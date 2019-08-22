import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions  from '../actions';

class ListItem extends Component {
    componentDidUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental
        && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    renderDescription() {
        var { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>                    
                </CardSection>
            );
        }
    }
    render() {
        var { titleStyle } = styles;
        const { id, title } = this.props.library;
        
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>  
                    {this.renderDescription()}                   
                </View>
               
            </TouchableWithoutFeedback>

        );
    }
}

var styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

function mapStateToProps(state, ownProps) {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
