import { ReactNode } from "react"
import { Text as TextView, TextProps } from "react-native"

import { Colors, Size } from "@/assets/styles"

type Props = {
  children: ReactNode
  regular?: boolean
  medium?: boolean
  semiBold?: boolean
  bold?: boolean
  fontSize?: number
  color?: string
} & TextProps

const Text = ({
  children,
  regular = true,
  medium = false,
  semiBold = false,
  bold = false,
  fontSize = 14,
  color,
  style,
  ...props
}: Readonly<Props>) => {
  const isRegular = medium || semiBold || bold ? false : regular
  return (
    <TextView
      style={[{
        fontSize: Size.verticalScale(fontSize),
        ...(isRegular && { fontFamily: "Poppins-Regular", fontWeight: "400" }),
        ...(medium && { fontFamily: "Poppins-Medium", fontWeight: "500" }),
        ...(semiBold && { fontFamily: "Poppins-SemiBold", fontWeight: "600" }),
        ...(bold && { fontFamily: "Poppins-Bold", fontWeight: "700" }),
        lineHeight: Size.verticalScale(fontSize) * 1.5,
        color: color ? color : Colors.Black.Base,
      }, style]}
      {...props}
    >
      {children}
    </TextView>
  )
}

export default Text
