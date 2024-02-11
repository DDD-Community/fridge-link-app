import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from '@screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
