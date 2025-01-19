import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { Colors, Size } from "@/assets/styles";
import Text from "../Text";
import GoogleIcon from "@/assets/images/Google";

type Props = {
  label: string
  labelColor?: string
  isGoogle?: boolean
  backgroundColor?: string
  onPress: () => void
} & TouchableOpacityProps

const Button = ({
  label = "",
  labelColor = Colors.White.Base,
  isGoogle = false,
  backgroundColor = Colors.Blue.Base,
  style,
  onPress,
  ...props
}: Readonly<Props>) => {
  return (
    <TouchableOpacity
      style={[{
        flexDirection: 'row',
        backgroundColor: isGoogle ? Colors.Blue.Soft : backgroundColor,
        padding: Size.horizontalScale(12),
        alignItems: 'center',
        justifyContent: isGoogle ? 'flex-start' : 'center',
        borderRadius: 10
      }, style]}
      onPress={onPress}
      {...props}
    >
      {isGoogle && (
        <View style={{ marginRight: Size.horizontalScale(8) }}>
          <GoogleIcon width={20} height={21} />
        </View>
      )}
      <Text medium fontSize={14} color={isGoogle ? Colors.Black.Icon : labelColor} style={[
        isGoogle ? { flex: 1, textAlign: 'center', marginRight: Size.horizontalScale(28) } : { textAlign: 'center' }
      ]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
