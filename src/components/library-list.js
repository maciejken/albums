import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './list-item';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library.item} />;
    }
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => `list-item-${library.id}`}
            />
        );
    }
}

function mapStateToProps(state) {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
