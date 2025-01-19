import { Dimensions } from "react-native"

const Colors = {
  White: {
    Base: "#FFFFFF",
    Warmth: "#F7F7F7",
    Dark: "#CACACA"
  },
  Black: {
    Base: "#000000",
    Warmth: "#272727",
    Text: "#323232",
    Icon: "#606470"
  },
  Blue: {
    Base: "#2179ff",
    Soft: "#E8F9FF"
  }
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen")
const BASE_WIDTH = 375
const BASE_HEIGHT = 812

const Size = {
  horizontalScale: (size: number) => (WIDTH / BASE_WIDTH) * size,
  verticalScale: (size: number) => (HEIGHT / BASE_HEIGHT) * size,
}

export { Colors, WIDTH, HEIGHT, Size }
