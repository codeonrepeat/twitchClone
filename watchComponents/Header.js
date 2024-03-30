import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View>
        <Text>Profile Icon</Text>
      </View>
      <View>
        <Text>no ads</Text>
      </View>
      <View>
        <Text>whispers</Text>
      </View>
      <View>
        <Text>notifs</Text>
      </View>
      <View>
        <Text>switch</Text>
      </View>
    </View>
  );
};

export default Header;
