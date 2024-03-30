import { View, Text, Image } from "react-native";
import React from "react";

const UserBasics = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      <Image
        source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
        style={{ height: 40, width: 40, borderRadius: 100 }}
      />
      <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>
        User Basics
      </Text>
    </View>
  );
};

export default UserBasics;
