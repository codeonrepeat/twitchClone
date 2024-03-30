import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeStackEdit = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>BACK</Text>
      </Pressable>
      <View>
        <Text>BRAND</Text>
      </View>
      <View>
        <Text>ABOUT</Text>
      </View>
      <View>
        <Text>SOCIAL LINKS</Text>
      </View>
    </View>
  );
};

export default HomeStackEdit;
