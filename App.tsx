import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "navigation/index";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "hooks/useCachedResources";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "stores/store";

const App = () => {
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar translucent />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  ) : null;
};

export default App;
