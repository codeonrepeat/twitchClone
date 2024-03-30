import { View, Text, Image } from "react-native";
import React from "react";
import StreamTags from "./StreamTags";

const UserCategory = () => {
  return (
    <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ height: 90, width: 70 }}
        source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
      />
      <View style={{ width: 180, paddingLeft: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>UserCategory</Text>
        <Text>620.2K Viewers</Text>
        <StreamTags />
      </View>
    </View>
  );
};

export default UserCategory;
