import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 2000);
	}, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
