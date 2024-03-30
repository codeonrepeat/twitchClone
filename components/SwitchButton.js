import { View, Text, Pressable } from "react-native";
import React from "react";

const SwitchButton = ({ toggleCreateWatch }) => {
  return (
    <Pressable
      style={{ position: "absolute", top: 98, right: 80 }}
      onPress={toggleCreateWatch}
    >
      <Text>switch</Text>
    </Pressable>
  );
};

export default SwitchButton;
