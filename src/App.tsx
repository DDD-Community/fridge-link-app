import Main from './screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

export default App;
