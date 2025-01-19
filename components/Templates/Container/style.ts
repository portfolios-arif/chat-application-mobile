import { StyleSheet } from "react-native";

import { Colors, Size, WIDTH } from "@/assets/styles";

type Props = {
  backgroundColor?: string
  containerColor?: string
}

const styles = ({
  backgroundColor = Colors.White.Base,
  containerColor = Colors.White.Base,
}: Readonly<Props>) => StyleSheet.create({
  baseView: {
    flex: 1,
    backgroundColor: containerColor,
  },
  pageTitle: {
    flexDirection: "row",
    backgroundColor: backgroundColor,
    paddingHorizontal: Size.horizontalScale(16),
    paddingTop: Size.verticalScale(36),
    paddingBottom: Size.verticalScale(16),
    borderBottomWidth: 0.3,
    alignItems: 'center',
    width: WIDTH
  }
})

export default styles
