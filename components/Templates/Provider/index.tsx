import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet, Dimensions } from "react-native";
import ToastManager from "toastify-react-native";
import {
  QueryClient,
  QueryClientProvider,
  onlineManager,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import * as Network from "expo-network";

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

onlineManager.setEventListener((setOnline) => {
  const eventSubscription = Network.addNetworkStateListener((state) => {
    setOnline(!!state.isConnected);
  });
  return eventSubscription.remove;
});

const ProviderLayout = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ToastManager
          duration={1500}
          hasBackdrop
          position="top"
          showProgressBar
        />
        <View style={styleSheets.container}>
          <StatusBar style="dark" backgroundColor="transparent" />
          {children}
        </View>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

const styleSheets = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});

export default ProviderLayout;
