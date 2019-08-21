import React from 'react';
import { Header } from './components/common';
import LibraryList from './components/library-list';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <Header headerText={'Tech Stack'} />
      <View style={{ flex: 1 }}>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
