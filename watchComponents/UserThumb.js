import { View, Text, Image } from "react-native";
import React from "react";
import StreamTags from "./StreamTags";

const UserThumb = () => {
  return (
    <View style={{}}>
      <View style={{ padding: 10, flexDirection: "row" }}>
        <Image
          source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
          style={{ height: 70, width: 110 }}
        />
        <View style={{ position: "absolute", top: 59, left: 13 }}>
          <Text
            style={{ backgroundColor: "black", color: "white", padding: 2 }}
          >
            90
          </Text>
        </View>
        <View>
          <View style={{ padding: 5, flexDirection: "row", alignItems: 20 }}>
            <Image
              source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
              style={{ height: 22, width: 22, borderRadius: 100 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20, paddingLeft: 5 }}>
              username
            </Text>
          </View>
          <View style={{ paddingLeft: 5 }}>
            <View>
              <Text>Stream description from user</Text>
            </View>
            <View>
              <Text>Category</Text>
            </View>
          </View>
          <StreamTags />
        </View>
      </View>
    </View>
  );
};

export default UserThumb;
