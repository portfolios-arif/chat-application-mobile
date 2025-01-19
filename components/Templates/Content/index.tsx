import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

import { Colors, Size } from "@/assets/styles";

type Props = {
  children: ReactNode
  withPadding?: boolean
  backgroundColor?: string
} & ViewProps

const Content = ({ children, withPadding = true, backgroundColor = Colors.White.Base, style, ...props }: Readonly<Props>) => {
  return (
    <View
      style={[{
        paddingHorizontal: withPadding ? Size.horizontalScale(24) : 0,
        backgroundColor: backgroundColor,
      }, style]}
      {...props}
    >
      {children}
    </View>
  )
}

export default Content
