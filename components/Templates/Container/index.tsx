import { ReactNode, useCallback, useEffect } from "react";
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, BackHandler } from "react-native"
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign"

import createStyles from "./style";
import { Text } from "@/components"

type Props = {
  children: ReactNode,
  backgroundColor?: string
  containerColor?: string
  headerShown?: boolean
  pageTitle?: string
  centerTitle?: boolean
  backHandler?: () => void
}

const Container = ({
  children,
  backgroundColor,
  containerColor,
  headerShown = true,
  pageTitle,
  centerTitle = false,
  backHandler,
}: Readonly<Props>) => {
  const styles = createStyles({
    containerColor,
    backgroundColor
  })

  const handleBackPress = useCallback(() => {
    if (backHandler) {
      backHandler()
      return true
    }

    if (router.canGoBack()) {
      router.back()
      return true
    }

    BackHandler.exitApp()
    return true
  }, [backHandler])

  useEffect(() => {
    const backPressHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    )
    return () => backPressHandler.remove()
  }, [handleBackPress])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.baseView} enabled={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            {headerShown && (
              <View
                style={styles.pageTitle}
              >
                <TouchableOpacity onPress={handleBackPress}>
                  <AntDesign name="arrowleft" size={20} color={"black"} />
                </TouchableOpacity>
                <Text style={centerTitle ? { textAlign: 'center', flex: 1, marginLeft: -20 } : { marginLeft: 10 }} semiBold={true} fontSize={16}>{pageTitle ?? ""}</Text>
              </View>
            )}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Container
