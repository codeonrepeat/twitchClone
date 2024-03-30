import { View, Text, Pressable, SafeAreaView } from "react-native";
import React from "react";
import StreamOptions from "../components/StreamOptions";
import { useNavigation } from "@react-navigation/native";

const Stream = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate("StreamOptions")}>
        <Text>Stream Options</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Stream;
