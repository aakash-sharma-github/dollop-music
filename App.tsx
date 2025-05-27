/**
 * MusicApp - A Spotify-like music streaming application
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import store from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
