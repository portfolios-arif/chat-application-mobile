import { Image, ScrollView, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { Container, Content } from "@/components/Templates";
import { Button, Gap, Text, TextInput } from "@/components";
import Images from "@/assets/images";
import { Colors, HEIGHT, Size, WIDTH } from "@/assets/styles";
import { Link } from "expo-router";

export default function LoginPage() {
  return (
    <Container headerShown={false}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
        keyboardShouldPersistTaps="handled"
      >
        <Content>
          <Image
            source={Images.LOGIN}
            style={{
              marginTop: Size.verticalScale(60),
              width: WIDTH * 0.89,
              height: HEIGHT * 0.3,
              resizeMode: "contain",
            }}
          />
          <Gap size={24} />
          <View>
            <Text bold fontSize={24}>
              Login
            </Text>
            <Gap size={12} />
            <Text>
              Your friends are waiting - Log in with email or Google to join the
              conversation.
            </Text>
          </View>
          <Gap size={24} />
          <Text>This is the difference ya</Text>
          <TextInput
            placeholder="Email ID"
            leftIcon={
              <Entypo name="email" size={20} color={Colors.Black.Icon} />
            }
          />
          <Gap size={18} />
          <Button
            label={"Login"}
            onPress={() => {}}
            style={{
              paddingVertical: Size.verticalScale(14),
              shadowColor: Colors.Black.Base,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          />
          <Gap size={16} />
          <Text
            medium
            fontSize={16}
            style={{ alignSelf: "center" }}
            color={Colors.White.Dark}
          >
            OR
          </Text>
          <Gap size={16} />
          <Button
            label={"Login with Google"}
            onPress={() => {}}
            isGoogle
            style={{
              paddingVertical: Size.verticalScale(14),
              marginBottom: Size.verticalScale(36),
              shadowColor: Colors.Black.Base,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 2,
              elevation: 1,
            }}
          />
          <View
            style={{ flexDirection: "row", alignSelf: "center", marginTop: -8 }}
          >
            <Text>Don't have account? </Text>
            <Link push href="/register">
              <Text color={Colors.Blue.Base} semiBold>
                Sign Up Now
              </Text>
            </Link>
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
}
