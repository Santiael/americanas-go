import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { registerRootComponent, SplashScreen } from 'expo';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { StoreProvider } from './store';
import Navigation from './navigation';
import colors from './constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App({ skipLoadingScreen }) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // eslint-disable-next-line
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        batStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <StoreProvider>
        <Navigation />
      </StoreProvider>
    </SafeAreaView>
  );
}

registerRootComponent(App);
