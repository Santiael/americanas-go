import React from 'react';
import { Platform, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { registerRootComponent, SplashScreen } from 'expo';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Navigation from './navigation';

function App(props) {
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
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaView  style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Navigation />
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

registerRootComponent(App);