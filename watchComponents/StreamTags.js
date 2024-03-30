import { View, Text } from "react-native";
import React from "react";

const StreamTags = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 6,
      }}
    >
      <Text>english</Text>
      <Text>chill</Text>
      <Text>vibes</Text>
      <Text>nyc</Text>
    </View>
  );
};

export default StreamTags;
