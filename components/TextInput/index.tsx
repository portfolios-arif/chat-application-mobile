import { Colors, Size } from "@/assets/styles"
import { ReactNode } from "react"
import { TextInput as Input, TextInputProps, View } from "react-native"

type Props = {
  placeholder: string
  leftIcon?: ReactNode
} & TextInputProps

const TextInput = ({
  placeholder,
  leftIcon,
  style,
  ...props
}: Readonly<Props>) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <View>
        {leftIcon}
      </View>
      <Input
        placeholder={placeholder}
        placeholderTextColor={Colors.White.Dark}
        style={{
          flexGrow: 1,
          borderBottomWidth: 0.5,
          borderColor: Colors.White.Dark,
          fontSize: Size.verticalScale(14),
          paddingHorizontal: Size.verticalScale(8),
          color: ""
        }}
        {...props}
      />
    </View>
  )
}

export default TextInput
