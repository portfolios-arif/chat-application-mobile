import { ReactNode } from "react";
import { View, KeyboardAvoidingView, Dimensions, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

type Props = {
  children: ReactNode
  withPadding?: boolean
}

const Container = ({ children, withPadding = true, }: Readonly<Props>) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{
          padding: withPadding ? 24 : 0,
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
        }}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Container
