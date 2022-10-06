import { useColorScheme } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "navigation/index";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "hooks/useCachedResources";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "stores/store";

const App = () => {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar translucent />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  ) : null;
};

export default App;
