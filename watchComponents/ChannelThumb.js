import { View, Text, Image } from "react-native";
import React from "react";
import StreamTags from "./StreamTags";

const ChannelThumb = () => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: "red",
          color: "white",
          fontWeight: "bold",
          width: 40,
          padding: 3,
          position: "absolute",
          top: 10,
          marginLeft: 3,
          zIndex: 3,
        }}
      >
        LIVE
      </Text>
      <Text
        style={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          width: 100,
          padding: 3,
          position: "absolute",
          top: 200,
          marginLeft: 3,
          zIndex: 3,
        }}
      >
        1.5K viewers
      </Text>
      <Image
        style={{ height: 230, width: "100%" }}
        source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
      />

      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={{ height: 50, width: 50, borderRadius: 100 }}
            source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
          />
        </View>
        <View style={{}}>
          <Text>Username</Text>
          <Text>Title of Stream</Text>
          <Text>Category</Text>
          <StreamTags />
        </View>
        <View>
          <Text>Ellipse</Text>
        </View>
      </View>
    </View>
  );
};

export default ChannelThumb;
