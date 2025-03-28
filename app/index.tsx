import React, { useEffect } from "react";
import { NativeModules } from "react-native";
import { Redirect } from "expo-router";
import RNFS from "react-native-fs";

const BundleUpdater = {
  BUNDLE_URL: "https://0ea1-182-4-100-85.ngrok-free.app/index.android.bundle",
  BUNDLE_PATH: `${RNFS.DocumentDirectoryPath}/index.android.bundle`,

  async updateBundle() {
    try {
      // Download the new bundle
      const downloadResult = await RNFS.downloadFile({
        fromUrl: this.BUNDLE_URL,
        toFile: this.BUNDLE_PATH,
      }).promise;

      if (downloadResult.statusCode === 200) {
        // Call native module to load bundle
        if (NativeModules.BundleUpdater) {
          await NativeModules.BundleUpdater.updateBundle(this.BUNDLE_PATH);
        }
      }
    } catch (error) {
      console.error("Bundle update failed:", error);
    }
  },

  init() {
    this.updateBundle();
  },
};

export default function Index() {
  useEffect(() => {
    BundleUpdater.init();
  }, []);

  return <Redirect href="/(auth)/login" />;
}
