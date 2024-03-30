import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeStackEditStreamInfo = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Text>BACK</Text>
    </Pressable>
  );
};

export default HomeStackEditStreamInfo;
