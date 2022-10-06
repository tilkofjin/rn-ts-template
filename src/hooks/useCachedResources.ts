import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  const loadResourcesAndDataAsync = async () => {
    try {
      SplashScreen.preventAutoHideAsync();
      // Load fonts
      await Font.loadAsync({
        ...Ionicons.font,
        'space-mono': require('assets/fonts/SpaceMono-Regular.ttf'),
      });
    } catch (error) {
      // We might want to provide this error information to an error reporting service
      console.log("🚀 ~ file: line 18 ~ loadResourcesAndDataAsync ~ error", error)
    } finally {
      setLoadingComplete(true);
      SplashScreen.hideAsync()
    }
  }

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
