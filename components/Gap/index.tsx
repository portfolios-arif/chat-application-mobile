import { Size } from "@/assets/styles";
import { View } from "react-native";

type Props = {
  size: number
}

const Gap = ({ size }: Readonly<Props>) => {
  return (
    <View style={{
      width: Size.horizontalScale(size),
      height: Size.verticalScale(size),
      backgroundColor: "transparent"
    }} />
  )
}

export default Gap
